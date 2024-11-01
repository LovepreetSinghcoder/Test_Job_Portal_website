// /pages/companies/[companyId].js
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function CompanyDetail({ company }) {
  const router = useRouter();
  const { companyId } = router.query;

  if (!company) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{company.name} - Company Detail</title>
        <meta name="description" content={`Details about ${company.name}`} />
      </Head>
      
      <Section>
        <h1>{company.name}</h1>
        <img src={company.logo} alt={company.name} width={100} height={100} />
        <p><strong>Location:</strong> {company.location}</p>
        <p><strong>Description:</strong> {company.description}</p>
        <ApplyButton href={`/jobs?companyId=${companyId}`}>View Job Listings</ApplyButton>
      </Section>
    </>
  );
}

// Fetch company data at build time
export async function getServerSideProps(context) {
  const { companyId } = context.params;
  const res = await fetch(`http://localhost:3000/api/companies?id=${companyId}`);
  const company = await res.json();

  return {
    props: { company }, // will be passed to the page component as props
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
