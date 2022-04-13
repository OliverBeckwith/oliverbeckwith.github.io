import { SectionContainer, SectionHeader } from "../common.css"
import { Email } from "./icons/Email"
import { LinkedIn } from "./icons/LinkedIn"
import { ContactMethod, ContactText } from "./styles.css"


export const Contact = () => {
  return (
    <SectionContainer>
      <SectionHeader>Want to talk?</SectionHeader>
      <ContactMethod>
        <Email />
        <ContactText>via email</ContactText>
      </ContactMethod>
      <ContactMethod>
        <LinkedIn />
        <ContactText>via LinkedIn</ContactText>
      </ContactMethod>
    </SectionContainer>
  )
}