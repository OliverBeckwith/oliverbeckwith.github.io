import {
  SectionContainer,
  SectionContent,
  SectionHeader,
  Link,
} from "../common.css";

export const Projects = () => {
  return (
    <SectionContainer>
      <SectionHeader>What do I do?</SectionHeader>
      <SectionContent>
        {"Most of my public projects are available to nosey through on "}
        <Link href="https://github.com/OliverBeckwith">
          <i className="fa-brands fa-github" /> GitHub
        </Link>
        {
          ". I also have various projects on the go that aren't public where I trial different technologies, frameworks, and more."
        }
      </SectionContent>
    </SectionContainer>
  );
};
