import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/utils/db';
import User from '@/models/User'; // Adjust the import path as necessary
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { email, password, name } = await req.json();

    // Basic validation
    if (!email || !password || !name) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword, name });
    await newUser.save();

    return NextResponse.json({ success: true, data: { email, name } }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}