import styled from "styled-components"
import { device } from "../../utils/media";

export const AboutContainer = styled.div`
  padding: 0 8px;

  ${device.tablet} {
    padding: 0 16px;
  }
  ${device.laptop} {
    padding: 16px 32px;
  }
  ${device.desktop} {
    padding: 16px 64px;
  }
`;

export const AboutHeader = styled.h2`
  font-weight: 500;
  text-align: center;
  font-size: 24px;

  ${device.tablet} {
    text-align: left;
  }
  ${device.laptop} {
    font-size: 36px;
    font-weight: 400;
  }
`;

export const AboutDescription = styled.p`
  line-height: 22px;
  text-align: center;
  font-size: 14px;

  ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
  ${device.tablet} {
    font-size: 18px;
    line-height: 26px;
    text-align: left;
  }
  ${device.desktop} {
    font-size: 20px;
    line-height: 28px;
  }
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
    ${device.tablet} {
      border-bottom-width: 3px;
    }
    ${device.desktop} {
      border-bottom-width: 4px;
    }
  }
`;