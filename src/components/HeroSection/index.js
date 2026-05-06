import React from 'react';
import Video from '../../videos/intro_vid.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to the Holy Resurrection Armenian School of Seattle</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
