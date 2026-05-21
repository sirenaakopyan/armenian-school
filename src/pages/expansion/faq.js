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

const QAItem = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 32px;
  margin-bottom: 32px;

  &:last-child {
    border-bottom: none;
  }
`;

const Question = styled.h3`
  color: #303030;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const Answer = styled.div`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
`;

const AnswerList = styled.ol`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 8px 0 0 20px;
  padding: 0;
`;

const SitePlanImage = styled.img`
  width: 100%;
  border-radius: 8px;
  display: block;
  margin: 16px 0 4px;
`;

const ImageCaption = styled.p`
  color: #999;
  font-size: 0.8rem;
  text-align: center;
  margin: 8px 0 0;
`;

const faqData = [
  {
    question: 'Where do we plan on building the Community Center and School?',
    answer: 'West of the Church, as shown on the site plan below.',
    image: '/images/faq-siteplan.png',
    imageAlt: 'Site plan showing the Community Center location west of the Church',
    imageCaption: 'Site Plan — Community Center and School, April 2026',
  },
  {
    question: 'Why was this location chosen?',
    answerIntro: 'Multiple reasons, including:',
    answerList: [
      'Increased lot density for future projects and expansions',
      'Prior Conditional Use Permit simplifies pre-construction',
      'Minimizes construction costs by avoiding Redmond-Woodinville Road improvements',
      'Simplifies Church sewer line connections',
      'Avoids disruption to ongoing school activities',
    ],
  },
  {
    question: 'Do we plan to expand the Parking Lot?',
    answer:
      'Yes. Approximately 60 additional parking spots are planned as a high priority.',
  },
  {
    question: 'Is the Community Center going to be suitable for concerts?',
    answer:
      'Yes. The top floor hall will include a stage for concerts and can accommodate up to 250 guests.',
  },
  {
    question:
      'How long is it expected to take to build the Community Center and School?',
    answer:
      'If there are no delays, the end-to-end project will require at least approximately 2 years. The first year is for producing all pre-construction documentation and obtaining permits; the second year is the construction itself.',
  },
  {
    question: 'How much is the project expected to cost?',
    answer:
      'Accurate estimates will be available after detailed design finalization. Rough estimates suggest between $2,500,000 and $3,000,000.',
  },
  {
    question: 'Do we have sufficient funds for this project?',
    answer:
      'No. To fund this project we will need wide participation of our community AND securing a construction loan. Rough estimates indicate participation from approximately 150 families contributing at least $100 monthly throughout the project duration, in addition to existing School and Church support.',
  },
];

const FAQPage = () => {
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
          <Link to='/expansion/faq'>F.A.Q.</Link>
        </Breadcrumb>
        <HeaderTitle>Frequently Asked Questions</HeaderTitle>
      </Header>
      <Content>
        {faqData.map((item, i) => (
          <QAItem key={i}>
            <Question>Q: {item.question}</Question>
            <Answer>
              {item.answer || item.answerIntro}
              {item.answerList && (
                <AnswerList>
                  {item.answerList.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </AnswerList>
              )}
            </Answer>
            {item.image && (
              <>
                <SitePlanImage src={item.image} alt={item.imageAlt || ''} />
                {item.imageCaption && (
                  <ImageCaption>{item.imageCaption}</ImageCaption>
                )}
              </>
            )}
          </QAItem>
        ))}
      </Content>
    </PageWrapper>
  );
};

export default FAQPage;
