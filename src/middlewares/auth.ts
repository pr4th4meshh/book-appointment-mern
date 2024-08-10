import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';

export async function auth(req: NextRequest) {
  const session = await getSession({ req });

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  return session.user;
}