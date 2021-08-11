import React from 'react';
// import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  FooterInfo,
  FooterInfoTitle,
  FooterInfoItems,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo href='https:/vnnic.vn'>
              <img src='../../logo.png' alt='' style={{width:'100%',height:'100%'}}/>
          </SocialLogo>
          <FooterInfoItems>
            <FooterInfoTitle>TRUNG TÂM INTERNET VIỆT NAM</FooterInfoTitle>
            <FooterInfo > <span style={{fontWeight:'lighter', fontFamily:'Arial'}}>Địa chỉ:</span> 18 Nguyễn Du, Hà Nội</FooterInfo>
            <FooterInfo ><span style={{fontWeight:'lighter', fontFamily:'Arial'}}>Điện thoại:</span> +84-24-3-5564944</FooterInfo>
            <FooterInfo ><span style={{fontWeight:'lighter', fontFamily:'Arial'}}>Email:</span> <span style={{color:'#FF6347'}}>vnix@vnnic.vn</span></FooterInfo>
          </FooterInfoItems>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;