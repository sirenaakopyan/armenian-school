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
  scroll-margin-top: 80px;

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

const FinancialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 28px 0 32px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(30, 42, 74, 0.05);
  text-align: center;
`;

const StatLabel = styled.p`
  color: #94a3b8;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
`;

const StatValue = styled.p`
  color: #1e2a4a;
  font-size: 1.8rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;
`;

const StatNote = styled.p`
  color: #94a3b8;
  font-size: 0.78rem;
  margin-top: 4px;
`;

const ProgressBarOuter = styled.div`
  background: #e8e6e1;
  border-radius: 8px;
  height: 12px;
  width: 100%;
  margin: 20px 0 8px;
  overflow: hidden;
`;

const ProgressBarInner = styled.div`
  background: linear-gradient(90deg, #c8963e, #d4a853);
  height: 100%;
  border-radius: 8px;
  width: ${({ percent }) => percent}%;
  transition: width 1s ease;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  color: #94a3b8;
  font-size: 0.78rem;
`;

const ExpenseTable = styled.div`
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(30, 42, 74, 0.05);
  margin-top: 28px;
`;

const ExpenseTableTitle = styled.div`
  padding: 20px 24px 12px;
  color: #1e2a4a;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  border-bottom: 1px solid #f1f0ed;
`;

const ExpenseRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 16px;
  padding: 16px 24px;
  align-items: center;
  border-bottom: 1px solid #f8f7f4;

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const ExpenseName = styled.div`
  color: #1e2a4a;
  font-size: 0.9rem;
  font-weight: 600;
`;

const ExpenseDetail = styled.div`
  color: #94a3b8;
  font-size: 0.8rem;
`;

const ExpenseAmount = styled.div`
  color: #1e2a4a;
  font-size: 0.95rem;
  font-weight: 700;
  text-align: right;
  font-family: 'Poppins', sans-serif;
`;

const ExpenseTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  background: #f9f8f6;
  color: #1e2a4a;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`;

const Disclaimer = styled.p`
  color: #94a3b8;
  font-size: 0.78rem;
  line-height: 1.6;
  margin-top: 20px;
  font-style: italic;
`;

const ExpandButton = styled.button`
  background: none;
  border: 1.5px solid #c8963e;
  color: #c8963e;
  padding: 8px 22px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.25s ease;

  &:hover {
    background: #c8963e;
    color: #fff;
  }
`;

const ExpansionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [financialsOpen, setFinancialsOpen] = useState(false);
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

      <Section id='about'>
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

      <Section id='updates'>
        <SectionTitle>Updates</SectionTitle>
        <SectionText>
          Monthly project updates and milestone announcements from the Expansion Committee.
        </SectionText>
        <SectionLink to='/expansion/updates'>Read all updates &rarr;</SectionLink>
      </Section>

      <Section id='financials'>
        <SectionTitle>Financials</SectionTitle>
        <SectionText>
          We are committed to full transparency with our community. Below is a
          summary of funds raised and expenses to date for the Community Center
          and School expansion project.
        </SectionText>

        <ExpandButton onClick={() => setFinancialsOpen(!financialsOpen)}>
          {financialsOpen ? 'Hide details' : 'View financial report'}
        </ExpandButton>

        {financialsOpen && (
          <>
            <FinancialsGrid>
              <StatCard>
                <StatLabel>Total Raised</StatLabel>
                <StatValue>$25,000</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>Total Spent</StatLabel>
                <StatValue>$7,754</StatValue>
                <StatNote>Pre-construction phase</StatNote>
              </StatCard>
              <StatCard>
                <StatLabel>Estimated Project Cost</StatLabel>
                <StatValue>$2.5&ndash;3M</StatValue>
                <StatNote>Subject to final design</StatNote>
              </StatCard>
            </FinancialsGrid>

            <SectionText style={{ fontWeight: 600, color: '#1e2a4a', fontSize: '0.95rem' }}>
              Fundraising Progress
            </SectionText>
            <ProgressBarOuter>
              <ProgressBarInner percent={1} />
            </ProgressBarOuter>
            <ProgressLabel>
              <span>$25,000 raised</span>
              <span>~$2,750,000 goal (midpoint estimate)</span>
            </ProgressLabel>

            <ExpenseTable>
              <ExpenseTableTitle>Expenditure Breakdown</ExpenseTableTitle>
              <ExpenseRow>
                <div>
                  <ExpenseName>Pre-Application Meeting</ExpenseName>
                  <ExpenseDetail>City of Redmond &middot; Jul 17, 2024</ExpenseDetail>
                </div>
                <ExpenseDetail></ExpenseDetail>
                <ExpenseAmount>$1,904</ExpenseAmount>
              </ExpenseRow>
              <ExpenseRow>
                <div>
                  <ExpenseName>Topographic Survey</ExpenseName>
                  <ExpenseDetail>M.S. Webb &middot; Dec 14, 2024</ExpenseDetail>
                </div>
                <ExpenseDetail></ExpenseDetail>
                <ExpenseAmount>$5,850</ExpenseAmount>
              </ExpenseRow>
              <ExpenseTotal>
                <span>Total Expenses</span>
                <span>$7,754</span>
              </ExpenseTotal>
            </ExpenseTable>

            <Disclaimer>
              Figures are as reported by the project treasurer. Accurate cost
              estimates will be finalized once detailed designs are complete. This
              section will be updated as new financial data becomes available.
            </Disclaimer>
          </>
        )}
      </Section>

      <Section id='volunteer'>
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

      <Section id='donate'>
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

      <Section id='faq'>
        <SectionTitle>F.A.Q.</SectionTitle>
        <SectionText>
          Answers to frequently asked questions about the expansion project.
        </SectionText>
        <SectionLink to='/expansion/faq'>View all questions &rarr;</SectionLink>
      </Section>

      <Section id='submit'>
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
