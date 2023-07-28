import {
  SectionContainer,
  SectionContent,
  SectionHeader,
  Link,
} from "../common.css";
import { Korelogic } from "./experiences/Korelogic";
import { ShopAppy } from "./experiences/ShopAppy";
import {
  ExperienceHeaderRow,
  ExperienceDates,
  ExperienceDescription,
  ExperienceTitle,
  SkillRow,
  SkillPill,
} from "./styles.css";

export const Experience = () => {
  return (
    <SectionContainer>
      <SectionHeader>Where have I been?</SectionHeader>
      <ShopAppy />
      <Korelogic />
    </SectionContainer>
  );
};
