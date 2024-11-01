// /pages/jobs/index.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function JobListings({ initialJobs }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    // Fetch filtered jobs based on search query
    const response = await fetch(`/api/jobs?search=${search}`);
    const filteredJobs = await response.json();
    setJobs(filteredJobs);
  };

  return (
    <>
      <Head>
        <title>Job Listings - Job Consultancy</title>
        <meta name="description" content="Explore job listings in various industries and apply for your dream job." />
      </Head>
      
      <Section>
        <h1>Job Listings</h1>
        <SearchForm onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by job title or keywords"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </SearchForm>

        <Jobs>
          {Array.isArray(jobs) &&  jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <Link href={`/jobs/${job.id}`}>
                  <a>View Job</a>
                </Link>
              </JobCard>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </Jobs>
      </Section>
    </>
  );
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const SearchForm = styled.form`
  margin: 20px 0;
  input {
    padding: 10px;
    font-size: 1rem;
    width: 250px;
    margin-right: 10px;
  }
  button {
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;
`;
