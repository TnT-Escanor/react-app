import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #133c8b;
  padding: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        color: #000;
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 15px;
    }
`

export const FooterInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  max-width: 400px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterInfoTitle = styled.h1`
  margin-bottom: 16px;
  color: #fff;
  font-weight: bolder;
`;

export const FooterInfo = styled.span`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;