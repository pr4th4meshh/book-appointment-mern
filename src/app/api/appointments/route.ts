import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/utils/db"
import Appointment from "@/models/Appointment"
import { auth } from "@/middlewares/auth" // Adjust the import path as necessary
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    // Get the session
    const session = await getServerSession(authOptions);

    // Check if the user is authenticated
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Parse the request data
    const data = await req.json();

    // Create and save the appointment
    const appointment = new Appointment({ ...data });
    await appointment.save();

    return NextResponse.json(
      { success: true, data: appointment },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// export async function GET(req: NextRequest) {
//   try {
//     const user = await auth(req)

//     if (!user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//     }

//     await connectToDatabase()

//     // Allow admin to view all appointments, clients only their own
//     const appointments =
//       user.role === "admin"
//         ? await Appointment.find({})
//         : await Appointment.find({ user: user.email })

//     return NextResponse.json(
//       { success: true, data: appointments },
//       { status: 200 }
//     )
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     )
//   }
// }

export async function GET(req: NextRequest) {
  try {
    const user = await auth(req);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    // Fetch appointments only for the logged-in user
    const appointments = await Appointment.find({ user: user.email });

    return NextResponse.json(
      { success: true, data: appointments },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const user = await auth(req);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Appointment ID is required" }, { status: 400 });
    }

    const appointment = await Appointment.findOneAndDelete({
      _id: id,
      user: user.email, // Only delete if the appointment belongs to the user
    });

    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found or unauthorized" }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, message: "Appointment canceled successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}