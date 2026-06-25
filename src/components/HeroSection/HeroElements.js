import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(30, 42, 74, 0.75) 0%,
      rgba(30, 42, 74, 0.5) 50%,
      rgba(200, 150, 62, 0.2) 100%
    );
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #1e2a4a;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 24px;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.15rem;
  text-align: center;
  max-width: 520px;
  line-height: 1.7;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeroBtn = styled.a`
  border-radius: 8px;
  background: #c8963e;
  white-space: nowrap;
  padding: 14px 36px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;

  &:hover {
    background: #b5842e;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(200, 150, 62, 0.35);
  }
`;

export const HeroBtnOutline = styled.a`
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  white-space: nowrap;
  padding: 14px 36px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
