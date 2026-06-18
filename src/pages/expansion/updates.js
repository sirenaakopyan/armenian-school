import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { posts } from './posts';

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

const Feed = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 56px 24px;
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: 16px;
  display: block;
  margin-bottom: 40px;
  box-shadow: 0 12px 40px rgba(30, 42, 74, 0.1);
`;

const PostCard = styled.article`
  background: #fff;
  border-radius: 16px;
  padding: 40px 36px;
  margin-bottom: 28px;
  box-shadow: 0 2px 12px rgba(30, 42, 74, 0.05);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(30, 42, 74, 0.08);
  }

  @media screen and (max-width: 768px) {
    padding: 28px 20px;
  }
`;

const PostDate = styled.p`
  color: #c8963e;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
`;

const PostTitle = styled.h2`
  color: #1e2a4a;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PostExcerpt = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const PostBody = styled.div`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.9;
  white-space: pre-wrap;

  strong {
    color: #1e2a4a;
    font-weight: 600;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 1.5px solid #c8963e;
  color: #c8963e;
  padding: 8px 22px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #c8963e;
    color: #fff;
  }
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
  margin: 24px 0 0;
`;

const ImageCaption = styled.p`
  color: #94a3b8;
  font-size: 0.78rem;
  text-align: center;
  margin: 8px 0 24px;
`;

const formatBody = (text) => {
  return text.split(/(\*\*[^*]+\*\*|\[IMAGE:[^\]]+\])/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('[IMAGE:')) {
      const inner = part.slice(7, -1);
      const [src, alt, caption] = inner.split('|');
      return (
        <React.Fragment key={i}>
          <PostImage src={src} alt={alt || ''} />
          {caption && <ImageCaption>{caption}</ImageCaption>}
        </React.Fragment>
      );
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
        <HeroImage
          src='/images/church_and_building_street_view.png'
          alt='Armenian Church and Community Center street view'
        />
        {posts.map((post) => (
          <PostEntry key={post.id} post={post} />
        ))}
      </Feed>
    </PageWrapper>
  );
};

export default UpdatesPage;
