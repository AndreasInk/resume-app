import React from 'react';
import styled from 'styled-components';
import VisionTextView from './VisionTextView';

const Container = styled.div`
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const ImpactView = ({ texts, resumeMode, darkMode }) => {
  const secondaryTextVito = resumeMode ? texts.vito.resumeMode : texts.vito.default;
  const secondaryTextCerebellia = resumeMode ? texts.cerebellia.resumeMode : texts.cerebellia.default;

  return (
    <Container darkMode={darkMode}>
      <VisionTextView text="Vito" secondaryText={secondaryTextVito} />
      <VisionTextView text="Cerebellia" secondaryText={secondaryTextCerebellia} />
    </Container>
  );
};

export default ImpactView;
