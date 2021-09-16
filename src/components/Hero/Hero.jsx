import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Web development is my passion, and I am very eager to learn and grow my skills and knowledge in Web Development!
      </SectionText>
      <Button onClick={() => window.location = 'mailto: samueldeason44@icloud.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;