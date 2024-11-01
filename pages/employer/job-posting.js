// /pages/employer/job-posting.js
import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';

export default function JobPosting() {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    location: '',
    company: '',
    // Add more fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Post the new job to the API
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobDetails),
    });
    // Optionally, redirect or show success message
  };

  return (
    <>
      <Head>
        <title>Post a Job - Job Consultancy</title>
      </Head>

      <Section>
        <h1>Post a Job</h1>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="title" 
            value={jobDetails.title} 
            onChange={handleChange} 
            placeholder="Job Title" 
            required 
          />
          <Textarea 
            name="description" 
            value={jobDetails.description} 
            onChange={handleChange} 
            placeholder="Job Description" 
            required 
          />
          <Input 
            type="text" 
            name="location" 
            value={jobDetails.location} 
            onChange={handleChange} 
            placeholder="Location" 
            required 
          />
          <Input 
            type="text" 
            name="company" 
            value={jobDetails.company} 
            onChange={handleChange} 
            placeholder="Company Name" 
            required 
          />
          <Button type="submit">Submit Job</Button>
        </Form>
      </Section>
    </>
  );
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 250px;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 250px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  cursor: pointer;
`;
