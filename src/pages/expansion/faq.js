import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { faqData } from './faqData';

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

const QAItem = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px 36px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(30, 42, 74, 0.05);

  @media screen and (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const Question = styled.h3`
  color: #1e2a4a;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 12px;
  font-family: 'Poppins', sans-serif;
`;

const Answer = styled.div`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.85;
`;

const AnswerList = styled.ol`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.85;
  margin: 8px 0 0 20px;
  padding: 0;
`;

const SitePlanImage = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
  margin: 16px 0 4px;
`;

const ImageCaption = styled.p`
  color: #94a3b8;
  font-size: 0.78rem;
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
