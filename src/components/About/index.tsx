import {
  AboutContainer,
  AboutHeader,
  AboutDescription,
  Strong,
} from "./styles.css"


export const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>Who am I?</AboutHeader>
      <AboutDescription>
        I am a <Strong>web developer</Strong> and a <Strong>systems engineer</Strong> with a passion for problem solving!
      </AboutDescription>
    </AboutContainer>
  )
}