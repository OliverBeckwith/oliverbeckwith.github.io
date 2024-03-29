import {
  SectionContainer,
  SectionHeader,
  SectionContent,
  Strong,
} from "../common.css";

export const About = () => {
  return (
    <SectionContainer>
      <SectionHeader>Who am I?</SectionHeader>
      <SectionContent>
        I am a <Strong>web developer</Strong> and a{" "}
        <Strong colour="red">systems engineer</Strong> with a passion for
        problem solving! Graduating with a MSc in Big Data Science and
        Artificial Intelligence in 2020, on top of a BSc in Computer Science, I
        have a multi-faceted appreciation of all technologies.
      </SectionContent>
      <SectionContent>
        I am always looking to make use of new and exciting technologies,
        frameworks, packages, and tools! As such, I like to get stuck into a
        variety of different projects to get a wide scope of experience.
      </SectionContent>
    </SectionContainer>
  );
};
