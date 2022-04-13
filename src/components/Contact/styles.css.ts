import styled from "styled-components";
import { device } from "../../utils/media";

export const ContactMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const ContactIcon = styled.svg`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  flex-grow: 0;
  padding: 8px;
  margin-right: 4px;

  ${device.mobile} {
    width: 18px;
    height: 18px;
  }
  ${device.tablet} {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
  ${device.laptop} {
    margin-right: 12px;
  }
  ${device.desktop} {
    margin-right: 16px;
    width: 28px;
    height: 28px;
  }
`;

export const ContactText = styled.span`
  font-size: 16px;
  cursor: pointer;
  box-sizing: content-box;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 4px;
  background-color: #8888ff44;
  border-left: 0px solid #8888ff88;

  transition: border 100ms ease-in-out;

  ${device.mobile} {
    font-size: 18px;
  }
  ${device.tablet} {
    font-size: 22px;
  }
  ${device.desktop} {
    font-size: 24px;
  }
`;

export const ContactMethod = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 4px 0;
  margin: 4px 0;
  height: 32px;

  &:hover ${ContactText} {
    border-left-width: 4px;
    ${device.tablet} {
      border-left-width: 6px;
    }
    ${device.laptop} {
      border-left-width: 8px;
    }
    ${device.desktop} {
      border-left-width: 10px;
    }
  }

  ${device.laptop} {
    margin: 8px 0;
  }
`;