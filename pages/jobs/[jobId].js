// /pages/jobs/[jobId].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function JobDetail({ job }) {
  const router = useRouter();
  const { jobId } = router.query;

  if (!job) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{job.title} - Job Detail</title>
        <meta name="description" content={`Details about ${job.title}`} />
      </Head>
      
      <Section>
        <h1>{job.title}</h1>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <ApplyButton href={`/api/apply?jobId=${jobId}`}>Apply Now</ApplyButton>
      </Section>
    </>
  );
}

// Fetch job data at build time
export async function getServerSideProps(context) {
  const { jobId } = context.params;
  const res = await fetch(`http://localhost:3000/api/jobs?id=${jobId}`);
  const job = await res.json();

  return {
    props: { job }, // will be passed to the page component as props
  };
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const ApplyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  text-decoration: none;
  margin-top: 20px;
`;
