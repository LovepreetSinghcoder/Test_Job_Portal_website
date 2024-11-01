// /pages/user/applied-jobs.js
import Head from 'next/head';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const response = await fetch('/api/users/applied-jobs'); // Assuming you have an endpoint for applied jobs
      const data = await response.json();
      setAppliedJobs(data);
    };

    fetchAppliedJobs();
  }, []);

  return (
    <>
      <Head>
        <title>Applied Jobs - Job Consultancy</title>
      </Head>

      <Section>
        <h1>Your Applied Jobs</h1>
        {appliedJobs.length > 0 ? (
          <JobsList>
            {appliedJobs.map((job) => (
              <JobItem key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <Link href={`/jobs/${job.id}`}>
                  <a>View Job</a>
                </Link>
              </JobItem>
            ))}
          </JobsList>
        ) : (
          <p>No applied jobs found.</p>
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

const JobsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobItem = styled.div`
  margin: 10px 0;
  text-align: left;
  width: 300px;
`;
