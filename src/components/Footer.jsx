import React from "react";
import styled from "styled-components";
import LogoImg from "../images/logoimg.png"

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo  =styled.img`
    width: 100%;
    height: 100%;
    max-width: 220px;
    max-height: 170px;
    padding: 5px;
    cursor: pointer;
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLink href="#About">      
            <Logo src={LogoImg} alt="logo"/>
        </NavLink>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <Copyright>&copy; 2025 Manharsinh Chauhan. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};
