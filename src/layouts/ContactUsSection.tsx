import Section from './Section';
import Container from './Container';
import Contacts from '@/components/Contacts';
import ContactTitle from '@/components/ContactTitle';

interface IProps {}

export default function ContactUsSection({}: IProps) {
  return (
    <Section id="contacts">
      <Container>
        <div className="bg-accent px-6 py-10 text-secondary">
          <ContactTitle>Contacts</ContactTitle>
          <Contacts />
          <ContactTitle>Write to us</ContactTitle>
        </div>
      </Container>
    </Section>
  );
}
