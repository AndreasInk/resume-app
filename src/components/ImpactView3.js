import React from 'react';
import styled from 'styled-components';
import VisionTextView from './VisionTextView';

const Container = styled.div`
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const ImpactView3 = ({ texts, resumeMode, darkMode }) => {
  const secondaryTextRune = texts.rune;
  const secondaryTextPingPath = texts.pingPath;
  const secondaryTextExamCram = texts.examCram;

  return (
    <Container darkMode={darkMode}>
      <VisionTextView text="Rune Labs" secondaryText={secondaryTextRune} />
      <VisionTextView text="ExamCram" secondaryText={secondaryTextExamCram} />
      <VisionTextView text="PingPath" secondaryText={secondaryTextPingPath} />
    </Container>
  );
};

export default ImpactView3;
