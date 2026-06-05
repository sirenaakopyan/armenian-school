import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { faqData } from './faqData';

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
