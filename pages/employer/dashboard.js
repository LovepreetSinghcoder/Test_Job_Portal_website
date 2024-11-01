// /pages/employer/dashboard.js
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function EmployerDashboard() {
  const [employerData, setEmployerData] = useState(null);

  useEffect(() => {
    // Fetch employer data from API
    const fetchEmployerData = async () => {
      const response = await fetch('/api/users/me'); // Replace with the actual endpoint for employer data
      const data = await response.json();
      setEmployerData(data);
    };

    fetchEmployerData();
  }, []);

  if (!employerData) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Employer Dashboard - Job Consultancy</title>
        <meta name="description" content="Manage your job postings and view applications." />
      </Head>

      <Section>
        <h1>Welcome, {employerData.name}</h1>
        <ButtonContainer>
          <Link href="/employer/job-posting">
            Post a Job
          </Link>
          <Link href="/employer/view-applications">
          View Applications
          </Link>
        </ButtonContainer>
      </Section>
    </>
  );
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  a {
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 5px;
  }
`;
