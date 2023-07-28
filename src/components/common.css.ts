import styled, { css } from "styled-components";
import { device } from "../utils/media";

export const theme = {
  colours: {
    linkblue: {
      foreground: "#88bbff88",
      background: "#88bbff44",
    },
    blue: {
      foreground: "#8888ff88",
      background: "#8888ff44",
    },
    green: {
      foreground: "#44bb4488",
      background: "#44bb4444",
    },
    red: {
      foreground: "#ff888888",
      background: "#ff888844",
    },
    darkgrey: {
      foreground: "#444444ff",
      background: "#44444444",
    },
  },
};

export const SectionContainer = styled.div`
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

export const SectionHeader = styled.h2`
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

export const SectionContent = styled.p`
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

export const Strong = styled.strong<{ colour?: keyof typeof theme.colours }>`
  ${props => props.colour ? css`
    background-color: ${theme.colours[props.colour].background};
  ` : css`
    background-color: ${theme.colours.green.background};
  `}
  white-space: nowrap;
  padding: 0 2px;
  border-radius: 4px;
  box-sizing: content-box;
  transition: border 100ms ease-in-out;
  font-weight: 500;
`;

export const Link = styled.a`
  cursor: pointer;
  background-color: ${theme.colours.linkblue.background};
  white-space: nowrap;
  padding: 0 2px;
  border-bottom: 0px solid ${theme.colours.linkblue.foreground};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-sizing: content-box;
  transition: border 100ms ease-in-out;
  font-weight: 500;
  text-decoration: none;
  color: black;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: black;
  }

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
