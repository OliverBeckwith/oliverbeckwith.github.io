import { SectionContent } from "../../common.css";
import {
  ExperienceHeaderRow,
  ExperienceTitle,
  ExperienceDates,
  ExperienceDescription,
  SkillRow,
  SkillPill,
} from "../styles.css";

export const ShopAppy = () => {
  return (
    <SectionContent>
      <ExperienceHeaderRow>
        <ExperienceTitle>Lead Software Engineer - ShopAppy Ltd</ExperienceTitle>
        <ExperienceDates>Dec 2021 - Aug 2023</ExperienceDates>
      </ExperienceHeaderRow>
      <ExperienceDescription>
        <p>
          This role threw me into the deep-end in regards to responsibility,
          workload, and expectations. Despite this, I managed to perform above
          and beyond, leading the business to make huge savings by cutting off
          an external agency, significantly improve the performance and
          stability of their platform, lead new exciting projects to boost their
          offerings, and more.
        </p>
        Notable Achievements:
        <ul>
          <li>
            Brought development in-house from previous usage of external
            agencies.
          </li>
          <li>
            Led a system-wide re-platforming, while managing external developers
            to ensure deadlines were met.
          </li>
          <li>
            Built a multi-purpose hub for integrating data with various external
            systems
          </li>
          <li>
            Developed a multi-environment infrastructure stack using AWS-CDK
          </li>
          <li>
            Despite working remotely, built up a strong relationship with the
            team and became the single source of truth across multiple layers of
            the company.
          </li>
          <li>
            Responsibility for maintaining site stability with responsive
            action.
          </li>
        </ul>
        <SkillRow>
          <SkillPill>PHP</SkillPill>
          <SkillPill>Project Management</SkillPill>
          <SkillPill>TypeScript</SkillPill>
          <SkillPill>Magento 2</SkillPill>
          <SkillPill>Team Communication</SkillPill>
          <SkillPill>AWS</SkillPill>
          <SkillPill>Business-to-business (B2B)</SkillPill>
          <SkillPill>CI/CD</SkillPill>
        </SkillRow>
      </ExperienceDescription>
    </SectionContent>
  );
};
