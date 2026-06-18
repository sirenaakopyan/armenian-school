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

const HighlightTitle = styled.h3`
  color: #1e2a4a;
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
`;

const HighlightText = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.75;
  margin: 0;
`;

const SectionTitle = styled.h2`
  color: #1e2a4a;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
`;

const FormInfo = styled.div`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.85;
  margin-bottom: 32px;
`;

const FieldList = styled.ul`
  margin: 12px 0 0 20px;
  padding: 0;

  li {
    margin-bottom: 4px;

    &::marker {
      color: #c8963e;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #c8963e;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 40px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;

  &:hover {
    background: #b5842e;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(200, 150, 62, 0.3);
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const CTANote = styled.p`
  color: #94a3b8;
  font-size: 0.82rem;
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
