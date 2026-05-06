import React, { useEffect } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.section`
  background: #f8f8f8;
  padding: 80px 24px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #303030;
  margin-bottom: 40px;
  text-align: center;
`;

const IframeWrapper = styled.div`
  width: 100%;
`;

const CalendarSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.styledcalendar.com/assets/parent-window.js';
    script.async = true;
    script.type = 'module';
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <CalendarContainer id='calendar'>
      <Inner>
        <Heading>Calendar</Heading>
        <IframeWrapper>
          <iframe
            src='https://embed.styledcalendar.com/#ogJNNliZJQS1WwHPztD4'
            title='School Calendar'
            data-cy='calendar-embed-iframe'
            style={{ width: '100%', border: 'none' }}
          />
        </IframeWrapper>
      </Inner>
    </CalendarContainer>
  );
};

export default CalendarSection;
