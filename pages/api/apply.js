// /pages/api/apply.js
export default async function handler(req, res) {
    const { jobId } = req.query;
  
    // Here, you can handle the job application logic, such as saving the application to a database
  
    // For demonstration purposes, let's just send a success response
    res.status(200).json({ message: `Successfully applied for job ${jobId}` });
  }
  