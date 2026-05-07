import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { posts } from './posts';

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

const Feed = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 60px 24px;
`;

const PostCard = styled.article`
  border-bottom: 1px solid #eee;
  padding-bottom: 48px;
  margin-bottom: 48px;

  &:last-child {
    border-bottom: none;
  }
`;

const PostDate = styled.p`
  color: #0038ff;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
`;

const PostTitle = styled.h2`
  color: #303030;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const PostExcerpt = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const PostBody = styled.div`
  color: #555;
  font-size: 0.95rem;
  line-height: 1.9;
  white-space: pre-wrap;

  strong {
    color: #303030;
    font-weight: 600;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 1px solid #0038ff;
  color: #0038ff;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #0038ff;
    color: #fff;
  }
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 8px;
  display: block;
  margin: 24px 0;
`;

const formatBody = (text) => {
  return text.split(/(\*\*[^*]+\*\*|\[IMAGE:[^\]]+\])/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('[IMAGE:')) {
      const inner = part.slice(7, -1);
      const [src, alt] = inner.split('|');
      return <PostImage key={i} src={src} alt={alt || ''} />;
    }
    return part;
  });
};

const PostEntry = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <PostCard>
      <PostDate>{post.date}</PostDate>
      <PostTitle>{post.title}</PostTitle>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
      {expanded && <PostBody>{formatBody(post.body)}</PostBody>}
      <ToggleButton onClick={() => setExpanded(!expanded)} style={{ marginTop: expanded ? '24px' : '0' }}>
        {expanded ? 'Show less' : 'Read full update'}
      </ToggleButton>
    </PostCard>
  );
};

const UpdatesPage = () => {
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
          <Link to='/expansion/updates'>Updates</Link>
        </Breadcrumb>
        <HeaderTitle>Project Updates</HeaderTitle>
      </Header>
      <Feed>
        {posts.map((post) => (
          <PostEntry key={post.id} post={post} />
        ))}
      </Feed>
    </PageWrapper>
  );
};

export default UpdatesPage;
