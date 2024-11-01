// /pages/user/profile.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function UserProfile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    // Add more fields as necessary
  });

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      const response = await fetch('/api/users/me'); // Fetch current user data
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update user profile
    await fetch('/api/users/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    // Optionally, redirect or show success message
  };

  return (
    <>
      <Head>
        <title>Edit Profile - Job Consultancy</title>
      </Head>

      <Section>
        <h1>Edit Profile</h1>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            placeholder="Name" 
            required 
          />
          <Input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            required 
          />
          <Button type="submit">Save Changes</Button>
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  cursor: pointer;
`;
