import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "MongoDB", text: 'Created my first API for adding a users email and encrypted password to a database '},
  { number: "Movie API", text: 'Created a website that allows users to view weekly Popular, Top-Rated, Upcoming, and Now Playing movies', },
  { number: "E-Commerce", text: 'Ran my own e-commerce site for 4 months and made little profit', },
  { number: "TrueCoders", text: 'Attended the TrueCoders bootcamp for web development', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
