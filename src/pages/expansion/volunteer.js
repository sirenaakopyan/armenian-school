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
  background: #f7f8fc;
  border-left: 4px solid #0038ff;
  padding: 24px 28px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 40px;
`;

const HighlightTitle = styled.h3`
  color: #303030;
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const HighlightText = styled.p`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
`;

const SectionTitle = styled.h2`
  color: #303030;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const FormInfo = styled.div`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 32px;
`;

const FieldList = styled.ul`
  margin: 12px 0 0 20px;
  padding: 0;

  li {
    margin-bottom: 4px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #0038ff;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 36px;
  border-radius: 50px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

const CTANote = styled.p`
  color: #999;
  font-size: 0.85rem;
  margin-top: 12px;
`;

const VOLUNTEER_FORM_URL = 'https://forms.gle/qZkgzgQVffGLSyPG9';

const VolunteerPage = () => {
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
          <Link to='/expansion/volunteer'>Volunteer</Link>
        </Breadcrumb>
        <HeaderTitle>Volunteer Opportunities</HeaderTitle>
      </Header>
      <Content>
        <Intro>
          We are striving to minimize the cost of construction. One of the
          approaches to achieve this is to leverage the help of many volunteers
          from our community.
        </Intro>

        <Highlight>
          <HighlightTitle>Community Members Have Already Pledged</HighlightTitle>
          <HighlightText>
            Several community members have pledged their professional services,
            including HVAC (Heating and Cooling) system installation and General
            Contractor services. We welcome additional pledges of labor,
            materials, and expertise.
          </HighlightText>
        </Highlight>

        <SectionTitle>How to Volunteer</SectionTitle>
        <FormInfo>
          If you would like to contribute your time, skills, or professional
          services to the project, please fill out our volunteer form. We will
          follow up with you to coordinate.
          <FieldList>
            <li>First and last name</li>
            <li>Email and/or cell phone number</li>
            <li>Description of your skills, expertise, and how you want to help</li>
          </FieldList>
        </FormInfo>

        <CTAWrapper>
          <CTAButton
            href={VOLUNTEER_FORM_URL}
            target='_blank'
            rel='noopener noreferrer'
          >
            I Want to Volunteer
          </CTAButton>
          <CTANote>Opens a Google Form in a new tab</CTANote>
        </CTAWrapper>
      </Content>
    </PageWrapper>
  );
};

export default VolunteerPage;
