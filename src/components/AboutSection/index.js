import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background: #fff;
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #303030;
  margin-bottom: 12px;
`;

const Subheading = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #0038ff;
  margin-bottom: 16px;
`;

const Body = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
`;

const ImageWrapper = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 8px;
    display: block;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id='about'>
      <Inner>
        <Content>
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
