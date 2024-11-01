// /pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      // Here you would handle the logic for sending an email or storing the message
      // For demonstration, we're just returning a success response
      return res.status(200).json({ message: 'Message sent successfully!' });
    } else {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  