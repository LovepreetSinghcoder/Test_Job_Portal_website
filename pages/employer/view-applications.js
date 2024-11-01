// /pages/employer/view-applications.js
import Head from 'next/head';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function ViewApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await fetch('/api/jobs/applications'); // Assuming you have an endpoint for applications
      const data = await response.json();
      setApplications(data);
    };

    fetchApplications();
  }, []);

  return (
    <>
      <Head>
        <title>View Applications - Job Consultancy</title>
      </Head>

      <Section>
        <h1>Job Applications</h1>
        {applications.length > 0 ? (
          <ApplicationsList>
            {applications.map((app) => (
              <ApplicationItem key={app.id}>
                <h3>{app.jobTitle}</h3>
                <p>{app.applicantName}</p>
                <Link href={`/jobs/${app.jobId}`}>
                  <a>View Job</a>
                </Link>
              </ApplicationItem>
            ))}
          </ApplicationsList>
        ) : (
          <p>No applications found.</p>
        )}
      </Section>
    </>
  );
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const ApplicationsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApplicationItem = styled.div`
  margin: 10px 0;
  text-align: left;
  width: 300px;
`;
