import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel: 205-541-0229">205-541-0229</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Emaill</LinkTitle>
      <LinkItem href="mailto: samueldeason44@icloud.com">samueldeason44@icloud.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Developing your success online!!</Slogan>
        </CompanyContainer>
       <SocialContainer>
        <SocialIcons href="https://github.com/samueldeason">
        <AiFillGithub/>
      </SocialIcons>
      <SocialIcons href="https://linkedin/in/samuel-deason-570746220">
        <AiFillLinkedin/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/samuel_deason">
        <AiFillInstagram/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
