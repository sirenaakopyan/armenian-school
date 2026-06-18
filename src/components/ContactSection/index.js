import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #111827;
  padding: 72px 24px 36px;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

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
  font-family: 'Poppins', sans-serif;
`;

const BrandTagline = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
  max-width: 300px;
`;

const ContactCol = styled.div``;

const ColHeading = styled.h3`
  font-size: 0.7rem;
  font-weight: 700;
  color: #c8963e;
  text-transform: uppercase;
  letter-spacing: 0.14em;
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
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }

    svg {
      color: #c8963e;
      flex-shrink: 0;
      font-size: 0.9rem;
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
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.25);
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
                  <FaMapMarkerAlt /> 11423 Redmond-Woodinville Rd NE, Redmond, WA
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
          <Copyright>&copy; {year} Holy Resurrection Armenian School. All rights reserved.</Copyright>
        </BottomRow>
      </Inner>
    </FooterContainer>
  );
};

export default ContactSection;
