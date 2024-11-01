// /pages/api/jobs.js
import dbConnect from '../../lib/db';
import Job from '../../models/Job';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    // Fetch all jobs
    const jobs = await Job.find({});
    res.status(200).json(jobs);
  } else if (req.method === 'POST') {
    // Create a new job
    try {
      const job = new Job(req.body);
      await job.save();
      res.status(201).json(job);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
