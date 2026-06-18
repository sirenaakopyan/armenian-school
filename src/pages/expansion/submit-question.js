import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { searchContent } from './searchIndex';

const CONTACT_EMAIL = 'armenianswa@gmail.com';

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
    &:hover { color: #fff; }
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
  margin-bottom: 32px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  color: #1e2a4a;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
  letter-spacing: 0.01em;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 14px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: inherit;
  line-height: 1.6;
  resize: vertical;
  box-sizing: border-box;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus {
    outline: none;
    border-color: #c8963e;
    box-shadow: 0 0 0 3px rgba(200, 150, 62, 0.1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: inherit;
  box-sizing: border-box;
  background: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus {
    outline: none;
    border-color: #c8963e;
    box-shadow: 0 0 0 3px rgba(200, 150, 62, 0.1);
  }
`;

const Button = styled.button`
  display: inline-block;
  background: #c8963e;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
  &:hover {
    background: #b5842e;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(200, 150, 62, 0.3);
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }
`;

const SecondaryButton = styled.button`
  display: inline-block;
  background: none;
  color: #c8963e;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 24px;
  border: 1.5px solid #c8963e;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 12px;
  transition: all 0.25s ease;
  &:hover { background: #c8963e; color: #fff; }
`;

const ResultCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 24px 28px;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(30, 42, 74, 0.05);
`;

const ResultType = styled.span`
  color: #c8963e;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ResultTitle = styled.h3`
  color: #1e2a4a;
  font-size: 1rem;
  font-weight: 700;
  margin: 6px 0 8px;
  font-family: 'Poppins', sans-serif;
`;

const ResultExcerpt = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 12px;
`;

const ResultLink = styled(Link)`
  color: #c8963e;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  &:hover { color: #b5842e; }
`;

const FollowUp = styled.div`
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const FollowUpText = styled.p`
  color: #1e2a4a;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SuccessBox = styled.div`
  background: #fff;
  border: 1.5px solid #86efac;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(34, 197, 94, 0.06);
`;

const SuccessTitle = styled.h3`
  color: #16a34a;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

const SuccessText = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.75;
`;

function truncate(text, len) {
  if (text.length <= len) return text;
  return text.slice(0, len).replace(/\s+\S*$/, '') + '...';
}

const SubmitQuestionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState('asking');
  const [question, setQuestion] = useState('');
  const [results, setResults] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  const toggleHandler = () => setIsOpen(!isOpen);

  const handleSearch = () => {
    if (!question.trim()) return;
    const matches = searchContent(question);
    if (matches.length > 0) {
      setResults(matches);
      setStage('found');
    } else {
      setStage('form');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSend = async () => {
    if (!name.trim() || !email.trim() || !question.trim()) return;
    setSending(true);

    const subject = encodeURIComponent('Question from Expansion Website');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nQuestion:\n${question}`
    );
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
      '_self'
    );

    setTimeout(() => {
      setSending(false);
      setStage('sent');
    }, 500);
  };

  const handleReset = () => {
    setStage('asking');
    setQuestion('');
    setResults([]);
    setName('');
    setEmail('');
  };

  return (
    <PageWrapper>
      <Sidebar isOpen={isOpen} toggleState={toggleHandler} />
      <Navbar toggleState={toggleHandler} />
      <Header>
        <Breadcrumb>
          <Link to='/expansion'>Expansion</Link>
          <span>/</span>
          <Link to='/expansion/submit-question'>Submit a Question</Link>
        </Breadcrumb>
        <HeaderTitle>Submit a Question</HeaderTitle>
      </Header>
      <Content>
        {stage === 'asking' && (
          <>
            <Intro>
              Have a question about the Armenian Community Center and School
              expansion project? Type your question below and we'll check if
              it's already been answered. If not, you can send it directly to
              the Expansion Committee.
            </Intro>
            <InputGroup>
              <Label>Your Question</Label>
              <TextArea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='e.g. How much will the project cost?'
              />
            </InputGroup>
            <Button onClick={handleSearch} disabled={!question.trim()}>
              Search for Answer
            </Button>
          </>
        )}

        {stage === 'found' && (
          <>
            <Intro>
              We found some information that might answer your question:
            </Intro>
            {results.map((r) => (
              <ResultCard key={r.id}>
                <ResultType>{r.label}</ResultType>
                <ResultTitle>{r.title}</ResultTitle>
                <ResultExcerpt>{truncate(r.content, 200)}</ResultExcerpt>
                <ResultLink to={r.url}>View full details &rarr;</ResultLink>
              </ResultCard>
            ))}
            <FollowUp>
              <FollowUpText>Did this answer your question?</FollowUpText>
              <Button onClick={handleReset}>
                Yes, thank you
              </Button>
              <SecondaryButton onClick={() => setStage('form')}>
                No, I still need help
              </SecondaryButton>
            </FollowUp>
          </>
        )}

        {stage === 'form' && (
          <>
            <Intro>
              We'll send your question to the Expansion Committee. Please
              provide your contact information so we can get back to you.
            </Intro>
            <InputGroup>
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='First and last name'
              />
            </InputGroup>
            <InputGroup>
              <Label>Email</Label>
              <Input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='your@email.com'
              />
            </InputGroup>
            <InputGroup>
              <Label>Question</Label>
              <TextArea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder='Your question...'
              />
            </InputGroup>
            <Button
              onClick={handleSend}
              disabled={!name.trim() || !email.trim() || !question.trim() || sending}
            >
              {sending ? 'Sending...' : 'Send to Committee'}
            </Button>
          </>
        )}

        {stage === 'sent' && (
          <SuccessBox>
            <SuccessTitle>Question Submitted</SuccessTitle>
            <SuccessText>
              Your email client should have opened with your question
              pre-filled. Please send the email to complete your submission.
              The Expansion Committee will review it and get back to you.
            </SuccessText>
            <Button onClick={handleReset} style={{ marginTop: '20px' }}>
              Ask Another Question
            </Button>
          </SuccessBox>
        )}
      </Content>
    </PageWrapper>
  );
};

export default SubmitQuestionPage;
