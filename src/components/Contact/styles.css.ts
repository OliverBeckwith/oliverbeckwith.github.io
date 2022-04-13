import styled from "styled-components";

export const ContactMethod = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 8px 0;
  height: 32px;
`;

export const ContactIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  padding-right: 8px;
`;

export const ContactText = styled.span`
  font-size: 24px;
  cursor: pointer;
  box-sizing: content-box;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 4px;
  background-color: #8888ff44;
  border-bottom: 0px solid #8888ff88;

  transition: border 100ms ease-in-out;

  &:hover {
    border-bottom-width: 4px;
  }
`;