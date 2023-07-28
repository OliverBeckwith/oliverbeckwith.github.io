import styled, { css } from "styled-components";
import { device } from "../../utils/media";
import { theme } from "../common.css";

export const ExperienceHeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ExperienceTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin: 0;

  ${device.laptop} {
    font-size: 22px;
  }
`;

export const ExperienceDates = styled.div`
  float: right;
  font-style: italic;
  font-size: 14px;
  color: ${theme.colours.darkgrey.foreground};
  ${device.laptop} {
    font-size: 18px;
  }
`;

export const ExperienceDescription = styled.div`
  width: 100%;
  text-align: left;

  ${device.laptop} {
    padding-left: 4px;
    width: calc(100% - 4px);
  }
`;

export const SkillRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const SkillPill = styled.div<{ colour?: keyof typeof theme.colours }>`
  padding: 0 2px;
  margin: 4px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;

  ${device.laptop} {
    padding: 0 4px;
    font-size: 16px;
  }

  ${(props) =>
    props.colour
      ? css`
          background-color: ${theme.colours[props.colour].background};
        `
      : css`
          background-color: ${theme.colours.blue.background};
          &:nth-child(odd) {
            background-color: ${theme.colours.green.background};
          }
        `}
`;
