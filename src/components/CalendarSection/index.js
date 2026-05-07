import React, { useEffect } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  iframe {
    flex: 1;
    width: 100%;
    border: none;
    display: block;
  }
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
      <iframe
        src='https://embed.styledcalendar.com/#ogJNNliZJQS1WwHPztD4'
        title='School Calendar'
        data-cy='calendar-embed-iframe'
      />
    </CalendarContainer>
  );
};

export default CalendarSection;
