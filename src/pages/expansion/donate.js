import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const DONATE_URL =
  'https://www.paypal.com/donate?token=_pOOiwi1etb0W59926ngwa3xUCwngc7_uRwBF0whV4ZX7t3N0haHzNFsVX-gRy9C3_-9p42MEYTuy_ya';

const PageWrapper = styled.div`
  background: #fff;
  min-height: 100vh;
`;

const Header = styled.div`
  background: #0038ff;
  padding: 120px 24px 60px;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  max-width: 1100px;
  margin: 0 auto 12px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Breadcrumb = styled.div`
  max-width: 1100px;
  margin: 0 auto 20px;

  a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      color: #fff;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    margin: 0 8px;
  }
`;

const Content = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 60px 24px;
`;

const Intro = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 24px;
`;

const Highlight = styled.div`
  background: #fff8f0;
  border-left: 4px solid #e8740c;
  padding: 24px 28px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 40px;
`;

const HighlightText = styled.p`
  color: #444;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.7;
  margin: 0;
`;

const SectionTitle = styled.h2`
  color: #303030;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Text = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 16px;
`;

const DonateCard = styled.div`
  background: #f7f8fc;
  border-radius: 12px;
  padding: 40px 32px;
  margin-top: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 28px 20px;
  }
`;

const DonateCardTitle = styled.h3`
  color: #303030;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

const DonateCardText = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 28px;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #0038ff;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 16px 48px;
  border-radius: 50px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const InstructionBox = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px 24px;
  margin-top: 24px;
  text-align: left;
`;

const InstructionTitle = styled.p`
  color: #303030;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const InstructionStep = styled.p`
  color: #555;
  font-size: 0.85rem;
  line-height: 1.7;
  margin: 0;
`;

const FundName = styled.span`
  background: #eef1ff;
  color: #0038ff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
`;

const DonatePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => setIsOpen(!isOpen);

  return (
    <PageWrapper>
      <Sidebar isOpen={isOpen} toggleState={toggleHandler} />
      <Navbar toggleState={toggleHandler} />
      <Header>
        <Breadcrumb>
          <Link to='/expansion'>Expansion</Link>
          <span>/</span>
          <Link to='/expansion/donate'>Donate</Link>
        </Breadcrumb>
        <HeaderTitle>Your Financial Support Is Needed</HeaderTitle>
      </Header>
      <Content>
        <Highlight>
          <HighlightText>
            Without broad participation of our Community Members this project
            will NOT be possible.
          </HighlightText>
        </Highlight>

        <Intro>
          The Armenian Community Center and School expansion is a project that
          belongs to all of us — and its success depends on the financial
          commitment of our community. Every contribution, no matter the size,
          brings us closer to making this vision a reality.
        </Intro>

        <SectionTitle>How Your Contribution Helps</SectionTitle>
        <Text>
          Rough estimates indicate that we need participation from approximately
          150 families contributing at least $100 monthly throughout the project
          duration, in addition to existing School and Church support. We also
          plan to secure a construction loan to supplement community
          contributions.
        </Text>
        <Text>
          Recurring monthly donations are the most impactful way to support the
          project, as they provide predictable funding that helps with planning
          and construction scheduling. One-time contributions are also welcome
          and appreciated.
        </Text>

        <DonateCard>
          <DonateCardTitle>
            Donate via PayPal
          </DonateCardTitle>
          <DonateCardText>
            You will be redirected to the Church's secure PayPal donation page
            where you can choose your amount and set up a recurring monthly
            contribution.
          </DonateCardText>

          <CTAButton
            href={DONATE_URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            Donate Now
          </CTAButton>

          <InstructionBox>
            <InstructionTitle>Important: Select the correct fund</InstructionTitle>
            <InstructionStep>
              On the PayPal page, under "Use this donation for," please
              select <FundName>Armenian School and Community Center Fund</FundName> from
              the dropdown menu before completing your donation.
            </InstructionStep>
          </InstructionBox>
        </DonateCard>
      </Content>
    </PageWrapper>
  );
};

export default DonatePage;
