import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: leading;
  align-items: leading;
  margin-top: 2%;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const SecondaryText = styled.p`
  font-size: 1rem;
  color: gray;
  margin-bottom: 5px;
`;

const VisionTextView = ({ text, secondaryText }) => (
  <Container>
    <Title>{text}</Title>
    {secondaryText.map((item, index) => (
      <SecondaryText key={index}>{item}</SecondaryText>
    ))}
  </Container>
);

export default VisionTextView;
