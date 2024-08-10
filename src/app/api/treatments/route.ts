// // this route is temp out of use

// import { NextApiRequest, NextApiResponse } from 'next';
// import connectToDatabase from '@/utils/db';
// import Treatment from '@/models/Treatment';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   await connectToDatabase();

//   if (req.method === 'POST') {
//     const sampleTreatments = [
//       { name: 'Acne Treatment', description: 'Effective treatment for acne.', category: 'Skin' },
//       { name: 'Laser Hair Removal', description: 'Permanent hair removal using laser.', category: 'Hair' },
//       { name: 'Anti-Aging Treatment', description: 'Rejuvenate your skin and reduce wrinkles.', category: 'Skin' },
//     ];

//     try {
//       await Treatment.insertMany(sampleTreatments);
//       res.status(201).json({ success: true, message: 'Sample treatments added.' });
//     } catch (error: any) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }
// }