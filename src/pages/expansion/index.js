import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const PageWrapper = styled.div`
  background: #fff;
  min-height: 100vh;
`;

const Hero = styled.div`
  background: #0038ff;
  padding: 120px 24px 80px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 24px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  color: #303030;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SectionText = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
`;

const FeatureList = styled.ul`
  color: #555;
  font-size: 1rem;
  line-height: 2;
  margin: 16px 0 16px 20px;
  padding: 0;

  li {
    margin-bottom: 4px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  margin-top: 32px;
  border-radius: 10px;
  display: block;
`;

const SectionLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  color: #0038ff;
  font-size: 0.95rem;
  text-decoration: none;
  border-bottom: 1px solid #0038ff;
  padding-bottom: 2px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

const ComingSoonBadge = styled.span`
  display: inline-block;
  background: #0038ff;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 50px;
  margin-left: 12px;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
          src='/images/church-current.png'
          alt='Armenian Church and School in Redmond, Washington'
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
        <SectionTitle>
          Submit a Question <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        </SectionTitle>
        <SectionText>
          Registered community members will be able to submit questions and
          comments to the Construction Committee here.
        </SectionText>
      </Section>
    </PageWrapper>
  );
};

export default ExpansionPage;
