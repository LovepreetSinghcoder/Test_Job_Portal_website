// /pages/user/dashboard.js
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      const response = await fetch('/api/users/me'); // Assuming you have an endpoint for fetching current user
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>User Dashboard - Job Consultancy</title>
        <meta name="description" content="Manage your profile and view your applied jobs." />
      </Head>

      <Section>
        <h1>Welcome, {userData.name}</h1>
        <ProfileSection>
          <h2>Your Profile</h2>
          <Link href="/user/profile">
            Edit Profile
          </Link>
        </ProfileSection>

        <AppliedJobsSection>
          <h2>Applied Jobs</h2>
          <Link href="/user/applied-jobs">
            View Applied Jobs
          </Link>
        </AppliedJobsSection>
      </Section>
    </>
  );
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const ProfileSection = styled.div`
  margin: 20px 0;
  a {
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
`;

const AppliedJobsSection = styled.div`
  margin: 20px 0;
  a {
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
`;
