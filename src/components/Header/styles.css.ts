import styled, { css } from "styled-components";
import { device } from "../../utils/media";

export const HeaderImage = styled.img`
  transition: all 100ms ease-in-out;
  
  width: 75%;
  ${device.tablet} {
    width: 360px;
  }
  ${device.desktop} {
    width: 512px;
  }
`;

export const HeaderRow = styled.div<{ effectStrength: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 16px;
  
  ${device.laptop} {
    flex-direction: row;
  }

  backdrop-filter: blur(${props => props.effectStrength * 8}px);
`;

export const HeaderName = styled.h1`
  color: black;
  font-size: 10vw;
  font-weight: 400;
  ${device.tablet} {
    font-size: 48px;
  }
  ${device.desktop} {
    font-size: 64px;
  }
`;