// /pages/contact.js
import Head from 'next/head';
import styled from 'styled-components';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API or email service
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    // Optionally, reset the form or show a success message
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Job Consultancy</title>
        <meta name="description" content="Get in touch with us for inquiries, support, or feedback." />
      </Head>

      <Section>
        <h1>Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            required 
          />
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            required 
          />
          <Textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            required 
          />
          <Button type="submit">Send Message</Button>
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
