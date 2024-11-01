// /pages/api/companies.js
export default async function handler(req, res) {
    const { id } = req.query;
  
    // Example static data for demonstration
    const companies = [
      { id: '1', name: 'Tech Company', location: 'New York', description: 'Innovative tech solutions.', logo: '/logos/tech-company-logo.png' },
      { id: '2', name: 'Business Corp', location: 'San Francisco', description: 'Leading business services.', logo: '/logos/business-corp-logo.png' },
      // Add more companies as needed
    ];
  
    // If an ID is provided, return that specific company
    if (id) {
      const company = companies.find((company) => company.id === id);
      return res.status(200).json(company || {});
    }
  
    // Otherwise, return all companies
    res.status(200).json(companies);
  }
  