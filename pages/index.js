// /pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

export default function Home({ jobCategories, featuredJobs, featuredCompanies }) {
  return (
    <>
      <Head>
        <title>Find Your Next Job - Job Consultancy</title>
        <meta name="description" content="Browse and apply to top job opportunities across industries. Find the right talent or the perfect job match today." />
      </Head>

      {/* Hero Section */}
      <HeroSection>
        <h1>Find Your Dream Job</h1>
        <p>Browse thousands of job listings, connect with top companies, and apply now!</p>
        <SearchBar>
          <input type="text" placeholder="Job title, keywords, or company" />
          <input type="text" placeholder="Location" />
          <button>Search</button>
        </SearchBar>
        <CTAButtons>
          <Link href="/jobs">Browse Jobs</Link>
          <Link href="/employer/job-posting">Post a Job</Link>
        </CTAButtons>
      </HeroSection>

      {/* Job Categories */}
      <Section>
        <h2>Job Categories</h2>
        <Categories>
          {
          Array.isArray(jobCategories) && jobCategories.length > 0 ?
          jobCategories.map((category) => (
            <CategoryCard key={category.id}>
              <Link href={`/jobs?category=${category.id}`}>
                {category.name}
              </Link>
            </CategoryCard>
          ))
          
          :
          <h1>No job found!</h1>
          }
        </Categories>
      </Section>

      {/* Featured Jobs */}
      <Section>
        <h2>Featured Jobs</h2>
        <Jobs>
          {
            Array.isArray(featuredJobs) && featuredJobs.length > 0 ?
          
          featuredJobs.map((job) => (
            <JobCard key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <Link href={`/jobs/${job.id}`}>
                View Job
              </Link>
            </JobCard>
          ))
          :
          <h1>No featured job found!</h1>
          }
        </Jobs>
      </Section>

      {/* Featured Companies */}
      <Section>
        <h2>Featured Companies</h2>
        <Companies>
          {
            Array.isArray(featuredCompanies) && featuredCompanies.lenght > 0
 ?
           featuredCompanies.map((company) => (
            <CompanyCard key={company.id}>
              <Image src={company.logo} alt={company.name} width={100} height={100} />
              <h3>{company.name}</h3>
              <Link href={`/companies/${company.id}`}>
                View Profile
              </Link>
            </CompanyCard>
          ))
          :
          <h1>No featured Companies found!</h1>
          }
        </Companies>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2>What Our Users Say</h2>
        <Testimonials>
          <TestimonialCard>
            <p>"This platform helped me find my dream job within weeks!"</p>
            <p>- Jane Doe</p>
          </TestimonialCard>
          <TestimonialCard>
            <p>"Great platform for employers to find top talent quickly!"</p>
            <p>- Company CEO</p>
          </TestimonialCard>
        </Testimonials>
      </Section>

      {/* Call to Action */}
      <CTASection>
        <h2>Ready to Take the Next Step?</h2>
        <p>Whether you're a job seeker or an employer, we're here to help you succeed.</p>
        <CTAButtons>
          <Link href="/user/signup">Find a Job</Link>
          <Link href="/employer/signup">Hire Talent</Link>
        </CTAButtons>
      </CTASection>
    </>
  );
}

// Styled Components
const HeroSection = styled.section`
  text-align: center;
  padding: 60px 20px;
  background-color: #f4f4f4;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  p {
    font-size: 1.25rem;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;


// const SearchBar = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 20px 0;

//   input {
//     padding: 10px;
//     font-size: 1rem;
//     margin-right: 5px;
//     width: 200px;
//   }
//   button {
//     padding: 10px 20px;
//     background-color: #0070f3;
//     color: #fff;
//     font-size: 1rem;
//     cursor: pointer;
//     border: none;
//   }
// `;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  input {
    padding: 10px;
    font-size: 1rem;
    margin: 5px 0; // Space between inputs
    width: 100%; // Full width on small screens
    max-width: 300px; // Limit max width
  }
  
  button {
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    width: 100%; // Full width
    max-width: 300px; // Limit max width
  }

  @media (min-width: 768px) {
    flex-direction: row;
    input {
      margin-right: 5px;
      width: 200px; // Original width on larger screens
    }
    
    button {
      width: auto; // Reset width on larger screens
    }
  }
`;


const CTAButtons = styled.div`
  margin-top: 20px;
  a {
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Section = styled.section`
  padding: 40px 20px;
  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

// const Categories = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0; 
`;

// const CategoryCard = styled.div`
//   background: #0070f3;
//   padding: 20px;
//   color: #fff;
//   border-radius: 8px;
//   font-weight: bold;
//   text-align: center;
// `;

const CategoryCard = styled.div`
  background: #0070f3;
  padding: 20px;
  color: #fff;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  flex: 1 1 200px; // Allow cards to grow and shrink

  @media (max-width: 600px) {
    flex: 1 1 100%; // Full width on smaller screens
  }
`;

// const Jobs = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
// `;


const Jobs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; // Allow wrapping
  gap: 20px;
  margin: 20px 0; // Add margin for spacing
`;

// const JobCard = styled.div`
//   border: 1px solid #ddd;
//   padding: 20px;
//   width: 200px;
//   text-align: center;
// `;


const JobCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 200px;
  text-align: center;
  flex: 1 1 200px; // Allow cards to grow and shrink

  @media (max-width: 600px) {
    flex: 1 1 100%; // Full width on smaller screens
  }
`;

const Companies = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

// const CompanyCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

const CompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1 1 200px; // Allow growth and shrinkage

  @media (max-width: 600px) {
    flex: 1 1 100%; // Full width on smaller screens
  }
`;


// const Testimonials = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
// `;

const Testimonials = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; // Allow wrapping
  gap: 20px;
`;

// const TestimonialCard = styled.div`
//   padding: 20px;
//   background-color: #f9f9f9;
//   width: 250px;
//   text-align: center;
//   border-radius: 8px;
// `;

const TestimonialCard = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  width: 250px;
  text-align: center;
  border-radius: 8px;
  
  @media (max-width: 600px) {
    width: 100%; // Full width on smaller screens
    max-width: 300px; // Limit max width
  }
`;

// const CTASection = styled.section`
//   text-align: center;
//   padding: 40px 20px;
//   background-color: #0070f3;
//   color: #fff;

//   h2 {
//     font-size: 2rem;
//     color: #fff;
//   }
//   p {
//     font-size: 1.25rem;
//   }
// `;

const CTASection = styled.section`
  text-align: center;
  padding: 40px 20px;
  background-color: #0070f3;
  color: #fff;

  h2 {
    font-size: 2rem;
    color: #fff;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.75rem; // Adjust heading size
    }

    p {
      font-size: 1rem; // Adjust paragraph size
    }
  }
`;
