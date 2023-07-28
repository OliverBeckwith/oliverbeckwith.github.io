import { SectionContainer, SectionHeader } from "../common.css";
import { Email } from "./icons/Email";
import { LinkedIn } from "./icons/LinkedIn";
import {
  ContactMethod,
  ContactMethodContainer,
  ContactText,
} from "./styles.css";

export const Contact = () => {
  return (
    <SectionContainer>
      <SectionHeader>Want to talk?</SectionHeader>
      <ContactMethodContainer>
        <ContactMethod href="mailto:oliverbeckwith1@gmail.com">
          <Email />
          <ContactText>via email</ContactText>
        </ContactMethod>
        <ContactMethod href="https://www.linkedin.com/in/oliverbeckwith/">
          <LinkedIn />
          <ContactText>via LinkedIn</ContactText>
        </ContactMethod>
      </ContactMethodContainer>
    </SectionContainer>
  );
};
