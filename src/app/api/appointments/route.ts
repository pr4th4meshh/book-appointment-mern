import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/utils/db"
import Appointment from "@/models/Appointment"
import { auth } from "@/middlewares/auth"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

interface IUser {
  email: string
  password: string
  name: string
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    // check if the user is authenticated
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectToDatabase();

    // parsing the request data
    const data = await req.json();

    // create and save the appointment
    const appointment = new Appointment({ ...data });
    await appointment.save();

    return NextResponse.json(
      { success: true, data: appointment },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const user = await auth(req);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    // fetching appointments only for the logged-in user
    const appointments = await Appointment.find({ user: user.email });

    return NextResponse.json(
      { success: true, data: appointments },
      { status: 200 }
    );
  } catch (error: any) {
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
      user: user.email, // only delete if the appointment belongs to the user
    });

    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found or unauthorized" }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, message: "Appointment canceled successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}