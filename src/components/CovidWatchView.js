import React from 'react';
import styled from 'styled-components';
import VisionTextView from './VisionTextView';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: leading;
  align-items: leading;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const CovidWatchView = ({ texts, resumeMode, darkMode }) => {
  const secondaryTextCovidWatch = resumeMode ? texts.resumeMode : texts.default;

  return (
    <Container darkMode={darkMode}>
      <VisionTextView text="Covid Watch" secondaryText={secondaryTextCovidWatch} />
    </Container>
  );
};

export default CovidWatchView;


