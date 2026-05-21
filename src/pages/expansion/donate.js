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

const DonationCard = styled.div`
  background: #f7f8fc;
  border-radius: 12px;
  padding: 40px 32px;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    padding: 28px 20px;
  }
`;

const DonationCardTitle = styled.h3`
  color: #303030;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
`;

const DonationCardSub = styled.p`
  color: #777;
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 28px;
`;

const FrequencyToggle = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 28px;
  background: #e8eaf0;
  border-radius: 50px;
  padding: 4px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

const FrequencyOption = styled.button`
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({ active }) => (active ? '#0038ff' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#555')};
`;

const AmountsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 20px;

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AmountButton = styled.button`
  padding: 14px;
  border: 2px solid ${({ active }) => (active ? '#0038ff' : '#ddd')};
  border-radius: 8px;
  background: ${({ active }) => (active ? '#eef1ff' : '#fff')};
  color: ${({ active }) => (active ? '#0038ff' : '#303030')};
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #0038ff;
  }
`;

const CustomAmountWrapper = styled.div`
  margin-bottom: 28px;
`;

const CustomAmountLabel = styled.label`
  display: block;
  color: #555;
  font-size: 0.85rem;
  margin-bottom: 6px;
`;

const CustomAmountInput = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ active }) => (active ? '#0038ff' : '#ddd')};
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: border-color 0.15s;

  span {
    padding: 12px 0 12px 14px;
    color: #999;
    font-size: 1.05rem;
    font-weight: 600;
  }

  input {
    border: none;
    outline: none;
    padding: 12px 14px 12px 4px;
    font-size: 1.05rem;
    font-weight: 600;
    color: #303030;
    width: 100%;
    background: transparent;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  background: #0038ff;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PaymentIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
  color: #aaa;
  font-size: 0.8rem;
`;

const SetupNote = styled.div`
  background: #fffbe6;
  border: 1px solid #f0e68c;
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 24px;
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.6;
`;

const PRESET_AMOUNTS = [50, 100, 250, 500];

const DonatePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [frequency, setFrequency] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const toggleHandler = () => setIsOpen(!isOpen);

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const finalAmount = isCustom ? Number(customAmount) : selectedAmount;

  const handleSubmit = () => {
    // Stripe Checkout will be wired here once keys are available.
    // For now, show an alert.
    alert(
      `Thank you! Stripe integration coming soon.\n\n` +
      `Amount: $${finalAmount} / ${frequency}\n` +
      `Cause: Community Center and School Construction`
    );
  };

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

        <DonationCard>
          <DonationCardTitle>
            Community Center and School Construction
          </DonationCardTitle>
          <DonationCardSub>
            Choose an amount and frequency below
          </DonationCardSub>

          <FrequencyToggle>
            <FrequencyOption
              active={frequency === 'monthly'}
              onClick={() => setFrequency('monthly')}
            >
              Monthly
            </FrequencyOption>
            <FrequencyOption
              active={frequency === 'one-time'}
              onClick={() => setFrequency('one-time')}
            >
              One-time
            </FrequencyOption>
          </FrequencyToggle>

          <AmountsGrid>
            {PRESET_AMOUNTS.map((amount) => (
              <AmountButton
                key={amount}
                active={!isCustom && selectedAmount === amount}
                onClick={() => handlePresetClick(amount)}
              >
                ${amount}
              </AmountButton>
            ))}
          </AmountsGrid>

          <CustomAmountWrapper>
            <CustomAmountLabel>Or enter a custom amount</CustomAmountLabel>
            <CustomAmountInput active={isCustom && customAmount}>
              <span>$</span>
              <input
                type='text'
                inputMode='numeric'
                placeholder='Other amount'
                value={customAmount}
                onChange={handleCustomChange}
                onFocus={() => { setIsCustom(true); setSelectedAmount(null); }}
              />
            </CustomAmountInput>
          </CustomAmountWrapper>

          <SubmitButton
            onClick={handleSubmit}
            disabled={!finalAmount || finalAmount < 1}
          >
            Donate ${finalAmount || '...'}{frequency === 'monthly' ? ' / month' : ''}
          </SubmitButton>

          <PaymentIcons>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
            <span>Google Pay</span>
          </PaymentIcons>

          <SetupNote>
            Payment processing is being set up. Once a Stripe account is
            configured, this form will securely process your payment. Thank you
            for your patience.
          </SetupNote>
        </DonationCard>
      </Content>
    </PageWrapper>
  );
};

export default DonatePage;
