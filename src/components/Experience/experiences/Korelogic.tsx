import { SectionContent } from "../../common.css";
import {
  ExperienceHeaderRow,
  ExperienceTitle,
  ExperienceDates,
  ExperienceDescription,
  SkillRow,
  SkillPill,
} from "../styles.css";

export const Korelogic = () => {
  return (
    <SectionContent>
      <ExperienceHeaderRow>
        <ExperienceTitle>
          Junior Javascript Developer - Korelogic Ltd
        </ExperienceTitle>
        <ExperienceDates>Feb 2021 - Dec 2021</ExperienceDates>
      </ExperienceHeaderRow>
      <ExperienceDescription>
        <ul>
          <li>Worked with external clients to deliver expected projects.</li>
          <li>
            Used work tracking tools and communicated progress with internal and
            external teams on a daily basis.
          </li>
          <li>
            Provided aide for the internal AWS architect for setting up and
            maintaining project resources, IAM roles, and CloudFormation
            templates
          </li>
          <li>
            Developed new solutions using modern frameworks alongside
            maintaining legacy systems
          </li>
        </ul>
        <SkillRow>
          <SkillPill>TypeScript</SkillPill>
          <SkillPill>Project Management</SkillPill>
          <SkillPill>AWS</SkillPill>
          <SkillPill>Team Communication</SkillPill>
          <SkillPill>Business-to-business (B2B)</SkillPill>
        </SkillRow>
      </ExperienceDescription>
    </SectionContent>
  );
};
