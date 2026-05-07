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
  background: #232a34;
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

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
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
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.2rem;
  text-align: center;
  max-width: 560px;
  line-height: 1.7;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 36px;
  display: flex;
  gap: 16px;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeroBtn = styled.a`
  border-radius: 50px;
  background: #0038ff;
  white-space: nowrap;
  padding: 12px 32px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #0038ff;
  }
`;

export const HeroBtnOutline = styled.a`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 12px 32px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #303030;
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
