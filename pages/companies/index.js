// /pages/companies/index.js
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function CompaniesList({ initialCompanies }) {
  const [companies, setCompanies] = useState(initialCompanies);

  return (
    <>
      <Head>
        <title>Companies - Job Consultancy</title>
        <meta name="description" content="Explore top companies hiring for various job positions." />
      </Head>
      
      <Section>
        <h1>Featured Companies</h1>
        <Companies>
          {companies.length > 0 ? (
            companies.map((company) => (
              <CompanyCard key={company.id}>
                <Link href={`/companies/${company.id}`}>
                  
                    <img src={company.logo} alt={company.name} width={100} height={100} />
                    <h3>{company.name}</h3>
                  
                </Link>
              </CompanyCard>
            ))
          ) : (
            <p>No companies found.</p>
          )}
        </Companies>
      </Section>
    </>
  );
}

// Fetch companies data at build time
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/companies`);
  const initialCompanies = await res.json();

  return {
    props: { initialCompanies },
  };
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Companies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CompanyCard = styled.div`
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 200px;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 50%;
  }
`;
