import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  padding: 60px 24px 32px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid #333;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const BrandCol = styled.div``;

const BrandName = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;

const BrandTagline = styled.p`
  font-size: 0.9rem;
  color: #888;
  line-height: 1.6;
  max-width: 280px;
`;

const ContactCol = styled.div``;

const ColHeading = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactItem = styled.li`
  a {
    color: #bbb;
    text-decoration: none;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }

    svg {
      color: #0038ff;
      flex-shrink: 0;
      font-size: 1rem;
    }
  }
`;

const BottomRow = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #555;
`;

const ContactSection = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer id='contact'>
      <Inner>
        <TopRow>
          <BrandCol>
            <BrandName>Holy Resurrection Armenian School</BrandName>
            <BrandTagline>
              Serving the Armenian community of the greater Seattle area through
              language, culture, and heritage education.
            </BrandTagline>
          </BrandCol>
          <ContactCol>
            <ColHeading>Contact</ColHeading>
            <ContactList>
              <ContactItem>
                <a href='mailto:school@armenianchurchwa.org'>
                  <FaEnvelope /> school@armenianchurchwa.org
                </a>
              </ContactItem>
              <ContactItem>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=11423+Redmond+-+Woodinville+Rd+NE,+Redmond,+WA+980526'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaMapMarkerAlt /> 11423 Redmond–Woodinville Rd NE, Redmond, WA
                </a>
              </ContactItem>
              <ContactItem>
                <a
                  href='https://m.facebook.com/groups/2370977892922128/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaFacebook /> Join Our Facebook Group
                </a>
              </ContactItem>
              <ContactItem>
                <a
                  href='https://armenianchurchwa.org/armenian-school/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaHeart /> Donate to the School
                </a>
              </ContactItem>
            </ContactList>
          </ContactCol>
        </TopRow>
        <BottomRow>
          <Copyright>© {year} Holy Resurrection Armenian School. All rights reserved.</Copyright>
        </BottomRow>
      </Inner>
    </FooterContainer>
  );
};

export default ContactSection;
