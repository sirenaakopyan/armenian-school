import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background: #f9f8f6;
  padding: 100px 24px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 72px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: #c8963e;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  color: #1e2a4a;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Subheading = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c4a7c;
  margin-bottom: 20px;
`;

const Body = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.9;
`;

const ImageWrapper = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 16px;
    display: block;
    box-shadow: 0 20px 60px rgba(30, 42, 74, 0.12);
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <Inner>
        <Content>
          <Eyebrow>Our Mission</Eyebrow>
          <Heading>About Us</Heading>
          <Subheading>We are the Sourp Harutyun Armenian School</Subheading>
          <Body>
            We are dedicated to fostering a vibrant community that embraces the
            rich heritage of Armenian culture, language, and history. By
            intertwining academics with a deep appreciation for our shared
            background, we empower our students to become lifelong learners and
            ambassadors of Armenian values in the broader Washington community
            and beyond.
          </Body>
        </Content>
        <ImageWrapper>
          <img src='/images/about.JPG' alt='Students at Sourp Harutyun Armenian School' />
        </ImageWrapper>
      </Inner>
    </AboutContainer>
  );
};

export default AboutSection;
