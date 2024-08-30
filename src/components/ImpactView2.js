import React from 'react';
import styled from 'styled-components';
import VisionTextView from './VisionTextView';

const Container = styled.div`
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const ImpactView2 = ({ texts, resumeMode, darkMode }) => {
  const secondaryTextRune = resumeMode ? texts.rune.resumeMode : texts.rune.default;

  return (
    <Container darkMode={darkMode}>
      <VisionTextView text="Rune Labs" secondaryText={secondaryTextRune} />
    </Container>
  );
};

export default ImpactView2;
