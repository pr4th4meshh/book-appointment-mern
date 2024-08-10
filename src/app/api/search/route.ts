import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/utils/db';
import Treatment from '@/models/Treatment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { q } = req.query;

  if (typeof q !== 'string' || q.trim() === '') {
    return res.status(400).json({ success: false, message: 'Invalid query' });
  }

  try {
    const treatments = await Treatment.find({ name: { $regex: q, $options: 'i' } });
    res.status(200).json({ success: true, data: treatments });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}
