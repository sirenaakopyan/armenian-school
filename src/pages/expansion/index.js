import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const PageWrapper = styled.div`
  background: #0c0c0c;
  min-height: 100vh;
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
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
  color: #ccc;
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
  border-bottom: 1px solid #222;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SectionText = styled.p`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.8;
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
          Details about the vision, scope, expected functions, facility size, and
          projected completion date will be published here soon.
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
        <SectionTitle>
          Volunteer Opportunities <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        </SectionTitle>
        <SectionText>
          Ways to contribute your time and skills to the expansion project will
          be listed here.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>
          F.A.Q. <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        </SectionTitle>
        <SectionText>
          Answers to frequently asked questions about the expansion project.
        </SectionText>
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
