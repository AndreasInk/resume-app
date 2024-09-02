import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-right: 10px;
`;

const Switch = styled.input`
  width: 40px;
  height: 20px;
  appearance: none;
  background: #ccc;
  outline: none;
  border-radius: 20px;
  position: relative;
  transition: background 0.3s;

  &:checked {
    background: #4caf50;
  }

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    background: white;
    transition: 0.3s;
  }

  &:checked:before {
    left: 21px;
  }
`;

const ToggleSwitch = ({ label, isOn, handleToggle }) => (
  <SwitchContainer>
    <Label>{label}</Label>
    <Switch type="checkbox" checked={isOn} onChange={handleToggle} />
  </SwitchContainer>
);

export default ToggleSwitch;