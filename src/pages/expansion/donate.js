import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const PageWrapper = styled.div`
  background: #f9f8f6;
  min-height: 100vh;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #1e2a4a 0%, #2c3e6b 60%, #1e2a4a 100%);
  padding: 130px 24px 60px;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  max-width: 1100px;
  margin: 0 auto 12px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Breadcrumb = styled.div`
  max-width: 1100px;
  margin: 0 auto 20px;

  a {
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.85rem;
    margin: 0 8px;
  }
`;

const Content = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 56px 24px;
`;

const Intro = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.85;
  margin-bottom: 28px;
`;

const Highlight = styled.div`
  background: #fff;
  border-left: 4px solid #c8963e;
  padding: 28px 32px;
  border-radius: 0 16px 16px 0;
  margin-bottom: 40px;
  box-shadow: 0 2px 12px rgba(30, 42, 74, 0.05);
`;

const HighlightText = styled.p`
  color: #1e2a4a;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.7;
  margin: 0;
`;

const SectionTitle = styled.h2`
  color: #1e2a4a;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
`;

const Text = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.85;
  margin-bottom: 16px;
`;

const DonateCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 48px 36px;
  margin-top: 40px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(30, 42, 74, 0.06);

  @media screen and (max-width: 768px) {
    padding: 32px 20px;
  }
`;

const DonateCardTitle = styled.h3`
  color: #1e2a4a;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  font-family: 'Poppins', sans-serif;
`;

const DonateCardText = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 28px;
`;

const PayPalForm = styled.form`
  display: inline-block;
`;

const PayPalButton = styled.input`
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
  border-radius: 8px;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
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
