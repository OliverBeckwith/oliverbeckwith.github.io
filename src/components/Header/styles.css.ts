import styled, { css } from "styled-components";
import { device } from "../../utils/media";

export const HeaderImage = styled.img`
  transition: all 100ms ease-in-out;
  
  box-sizing: border-box;
  border: 4px solid white;
  border-radius: 16px;
  box-shadow: 0 0 8px grey;

  width: 75%;
  ${device.tablet} {
    width: 360px;
  }
  ${device.desktop} {
    width: 512px;
    border-width: 8px;
    border-radius: 32px;
    box-shadow: 0 0 16px grey;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderRow = styled.div<{ effectStrength: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 16px;
  width: 100%;
  max-width: 1920px;
  
  ${device.laptop} {
    flex-direction: row;
  }

  filter: blur(${props => props.effectStrength * 8}px) grayscale(${props => props.effectStrength});
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