import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

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

const PayPalForm = styled.form`
  display: inline-block;
`;

const PayPalButton = styled.input`
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
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
            Click the button below to make a secure donation through PayPal.
            You can choose your amount and set up a recurring monthly
            contribution.
          </DonateCardText>

          <PayPalForm
            action='https://www.paypal.com/donate'
            method='post'
            target='_top'
          >
            <input type='hidden' name='hosted_button_id' value='6P25MGTZ4MEZ8' />
            <PayPalButton
              type='image'
              src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
              border='0'
              name='submit'
              title='PayPal - The safer, easier way to pay online!'
              alt='Donate with PayPal button'
            />
          </PayPalForm>
        </DonateCard>
      </Content>
    </PageWrapper>
  );
};

export default DonatePage;
