import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const PageWrapper = styled.div`
  background: #f9f8f6;
  min-height: 100vh;
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #1e2a4a 0%, #2c3e6b 60%, #1e2a4a 100%);
  padding: 140px 24px 90px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(200, 150, 62, 0.08) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;
  position: relative;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.15rem;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
  position: relative;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  color: #1e2a4a;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 12px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.01em;
`;

const SectionText = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.8;
`;

const FeatureList = styled.ul`
  color: #64748b;
  font-size: 1rem;
  line-height: 2;
  margin: 16px 0 16px 20px;
  padding: 0;

  li {
    margin-bottom: 4px;

    &::marker {
      color: #c8963e;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  margin-top: 32px;
  border-radius: 16px;
  display: block;
  box-shadow: 0 12px 40px rgba(30, 42, 74, 0.1);
`;

const SectionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 16px;
  color: #c8963e;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  gap: 4px;

  &:hover {
    color: #b5842e;
    gap: 8px;
  }
`;

const ComingSoonBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #c8963e, #d4a853);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 6px;
  margin-left: 12px;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const ExpansionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => setIsOpen(!isOpen);

  return (
    <PageWrapper>
      <Sidebar isOpen={isOpen} toggleState={toggleHandler} />
      <Navbar toggleState={toggleHandler} />
      <Hero>
        <HeroTitle>School Expansion Project</HeroTitle>
        <HeroSubtitle>
          Building the future of the Armenian community in Redmond, Washington.
        </HeroSubtitle>
      </Hero>

      <Section>
        <SectionTitle>About the Project</SectionTitle>
        <SectionText>
          We are building a multifunctional Community Center that will serve as
          the heart of the Armenian community in Redmond, Washington. The new
          facility will provide:
        </SectionText>
        <FeatureList>
          <li>Classrooms to accommodate 130 students concurrently</li>
          <li>Banquet Hall accommodating up to 250 guests, including a stage and a dance floor</li>
          <li>Commercial Kitchen</li>
        </FeatureList>
        <SectionText>
          The expansion will enlarge school facilities for growing enrollment
          and create a multipurpose community events venue — a banquet and
          concert hall for weddings, cultural celebrations, community
          gatherings, and major events.
        </SectionText>
        <ProjectImage
          src='/images/building_only.png'
          alt='Armenian Community Center building rendering'
        />
        <SectionText style={{ marginTop: '24px' }}>
          This is not just a construction project. It is a statement of who we
          are as a community and what we want to pass on to the next generation.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Updates</SectionTitle>
        <SectionText>
          Monthly project updates and milestone announcements from the Expansion Committee.
        </SectionText>
        <SectionLink to='/expansion/updates'>Read all updates &rarr;</SectionLink>
      </Section>

      <Section>
        <SectionTitle>
          Financials <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        </SectionTitle>
        <SectionText>
          Fundraising goals, contributions received, and expenditure breakdowns
          will be published here for full community transparency.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Volunteer Opportunities</SectionTitle>
        <SectionText>
          We are striving to minimize the cost of construction by leveraging the
          help of volunteers from our community. Learn how you can contribute
          your time, skills, or professional services.
        </SectionText>
        <SectionLink to='/expansion/volunteer'>
          Learn how to volunteer &rarr;
        </SectionLink>
      </Section>

      <Section>
        <SectionTitle>Your Financial Support Is Needed</SectionTitle>
        <SectionText>
          Without broad participation of our community members this project will
          not be possible. Every contribution brings us closer to making the
          Community Center a reality.
        </SectionText>
        <SectionLink to='/expansion/donate'>
          Learn how to contribute &rarr;
        </SectionLink>
      </Section>

      <Section>
        <SectionTitle>F.A.Q.</SectionTitle>
        <SectionText>
          Answers to frequently asked questions about the expansion project.
        </SectionText>
        <SectionLink to='/expansion/faq'>View all questions &rarr;</SectionLink>
      </Section>

      <Section>
        <SectionTitle>Submit a Question</SectionTitle>
        <SectionText>
          Have a question about the expansion project? Check if it's already
          been answered, or send it directly to the Expansion Committee.
        </SectionText>
        <SectionLink to='/expansion/submit-question'>
          Ask a question &rarr;
        </SectionLink>
      </Section>
    </PageWrapper>
  );
};

export default ExpansionPage;
