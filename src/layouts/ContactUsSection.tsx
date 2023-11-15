import Section from './Section';
import Container from './Container';
import Contacts from '@/components/Contacts';
import ContactTitle from '@/components/ContactTitle';
import ContactForm from '@/components/ContactForm';

interface IProps {}

export default function ContactUsSection({}: IProps) {
  return (
    <Section id="contacts">
      <Container>
        <div
          className="flex flex-col gap-10 bg-accent
                    px-6 py-10 text-secondary 
                    md:gap-12 md:px-24 md:py-12
                    xl:flex-row xl:justify-between xl:px-28
                    xl:py-16"
        >
          <Contacts />
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
