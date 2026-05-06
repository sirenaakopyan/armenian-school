import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.section`
  background: #303030;
  padding: 60px 24px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 28px;
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactItem = styled.li`
  a {
    color: #ccc;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;

const ContactSection = () => {
  return (
    <FooterContainer id='contact'>
      <Inner>
        <Heading>Contact</Heading>
        <ContactList>
          <ContactItem>
            <a href='mailto:school@armenianchurchwa.org'>
              <span>✉</span> school@armenianchurchwa.org
            </a>
          </ContactItem>
          <ContactItem>
            <a
              href='https://www.google.com/maps/search/?api=1&query=11423+Redmond+-+Woodinville+Rd+NE,+Redmond,+WA+980526'
              target='_blank'
              rel='noreferrer'
            >
              <span>📍</span> 11423 Redmond - Woodinville Rd NE, Redmond, WA 980526
            </a>
          </ContactItem>
          <ContactItem>
            <a
              href='https://m.facebook.com/groups/2370977892922128/'
              target='_blank'
              rel='noreferrer'
            >
              <span>👥</span> Join Our Facebook Group
            </a>
          </ContactItem>
          <ContactItem>
            <a
              href='https://armenianchurchwa.org/armenian-school/'
              target='_blank'
              rel='noreferrer'
            >
              <span>💛</span> Donate
            </a>
          </ContactItem>
        </ContactList>
      </Inner>
    </FooterContainer>
  );
};

export default ContactSection;
