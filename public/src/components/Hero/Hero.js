import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hello, I'm Chaimaa  <br />
          A junior Web Developer
        </SectionTitle>
        <SectionText>
       
        </SectionText>
        <Button onClick={props.handleClick}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;