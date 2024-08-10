// import { NextRequest, NextResponse } from 'next/server';
// import connectToDatabase from '@/utils/db';
// import Appointment from '@/models/Appointment';
// import { auth } from '@/middlewares/auth'; // Adjust the import path as necessary

// export async function GET(req: NextRequest) {
//   try {
//     const user = await auth(req);

//     if (!user || user.role !== 'admin') {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     await connectToDatabase();
//     const appointments = await Appointment.find({});

//     return NextResponse.json({ success: true, data: appointments }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//   }
// }