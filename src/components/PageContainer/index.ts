import styled from "styled-components";
import { device } from "../../utils/media";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${device.widescreen} {
    background-color: #fbfbfb;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  background-color: white;
  ${device.widescreen} {
    min-height: 100vh;
    box-shadow: 0 0 16px grey;
  }
`;
