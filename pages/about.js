// /pages/about.js
import Head from 'next/head';
import styled from 'styled-components';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Job Consultancy</title>
        <meta name="description" content="Learn more about our job consultancy, our mission, and our team." />
      </Head>

      <Section>
        <h1>About Us</h1>
        <Content>
          <p>
            Welcome to our Job Consultancy! We are dedicated to connecting job seekers with their dream jobs and employers with top talent.
          </p>
          <p>
            Our mission is to simplify the job search process and empower individuals and organizations to achieve their career goals.
          </p>
          <p>
            With a team of experienced professionals, we leverage our industry knowledge and innovative technology to offer the best solutions for both job seekers and employers.
          </p>
          <p>
            Thank you for choosing us as your partner in success!
          </p>
        </Content>
      </Section>
    </>
  );
}

// Styled Components
const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1.1rem;
`;
