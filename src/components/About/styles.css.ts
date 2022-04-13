import styled from "styled-components"

export const AboutContainer = styled.div`
`;

export const AboutHeader = styled.h2`
  font-weight: 500;
`;

export const AboutDescription = styled.p`
  line-height: 24px;
`;

export const Strong = styled.strong`
  background-color: #8888ff44;
  white-space: nowrap;
  padding: 0 2px;
  border-bottom: 0px solid #8888ff88;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-sizing: content-box;
  transition: border 100ms ease-in-out;
  font-weight: 600;

  &:hover {
    border-bottom-width: 2px;
  }
`;