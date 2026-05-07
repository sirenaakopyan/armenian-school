import React from 'react';
import Video from '../../videos/intro_vid.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroSubtitle,
  HeroBtnWrapper,
  HeroBtn,
  HeroBtnOutline,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Holy Resurrection Armenian School</HeroH1>
        <HeroSubtitle>
          Nurturing the next generation of Armenian language, culture, and
          community in the greater Seattle area.
        </HeroSubtitle>
        <HeroBtnWrapper>
          <HeroBtn href='#about'>Learn More</HeroBtn>
          <HeroBtnOutline
            href='https://armenianchurchwa.org/armenian-school/'
            target='_blank'
            rel='noreferrer'
          >
            Donate
          </HeroBtnOutline>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
