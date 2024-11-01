// /pages/api/jobs.js
export default async function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'POST':
        // Handle job posting
        const newJob = req.body; // You would typically save this to your database
        return res.status(201).json({ message: 'Job posted successfully', job: newJob });
  
      case 'GET':
        // Fetch job applications
        const applications = [
          { id: '1', jobId: '1', jobTitle: 'Software Engineer', applicantName: 'John Doe' },
          // Add more mock applications as needed
        ];
        return res.status(200).json(applications);
  
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  