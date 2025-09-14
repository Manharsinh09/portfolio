import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { bio } from "../data/profile";
import { MenuRounded } from "@mui/icons-material";
import {motion} from "motion/react";
import LogoImg from "../images/logoimg.png"

const Nav = styled.div`
    background-color: ${({theme})=>theme.bg};
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: sticky;    
    z-index:10;
    color:white;
    top:0;
    font-family: 'IBM Plex Sans', sans-serif;
`;
const NavbarContainer = styled.div`
    width:100%;
    max-width: 1200px;
    height: 100%;
    padding: 0 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;    
   
`;
const NavLogo = styled(motion.div)`
    color: inherit;
    width: 80%;
    padding: 0 2px;
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 2rem;
`;
const Logo  =styled.img`
    width: 100%;
    height: 100%;
    max-width: 220px;
    max-height: 170px;
    padding: 5px;
`;

const NavItems = styled(motion.ul)`
    width:100%;
    list-style: none;
    font-size: 1.2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 32px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({theme})=>theme.primary};
    text-decoration: none;
    cursor: pointer;
`;

const ButtonContainer = styled(motion.div)`
    width: 80%;
    height:100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

const GitButton = styled.a`

    border: 1px solid ${({theme})=>theme.primary};
    color: ${({theme})=>theme.primary};
    text-decoration: none;
    font-size: 1.2rem;
    border-radius:20px;
    padding: 7px 20px;
    cursor: pointer;
    transition: 1s;
    box-sizing: border-box;
    
    &:hover{
        background-color: ${({theme})=>theme.primary};
        color: ${({theme})=>theme.text_primary};
    }
  
`;

const MobileIcon = styled.div`
    
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({theme})=> theme.primary};
    display:none;
    @media screen and (max-width :768px){
        display: flex;
    }

`;

const MobileMenu = styled.ul`
    width: 100%;
    display:flex;
    flex-direction: column;
    top: 80px;
    position: absolute;
    right: 0;   
    left: 0;
    background-color: ${({theme})=> theme.bgLight};
    padding: 16px;
    gap: 16px;
    z-index: 1000;
    box-sizing: border-box;
    @media screen and (min-width: 768px){
        display: none;
    }
    
`;

export const Navbar =()=>{
    const [isOpen,setIsopen] = useState(false);
    const theme = useTheme();
    return(
        <Nav>
            <NavbarContainer>
                <NavLogo 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{opacity: 1, x: 0 }}
                    initial={{opacity: 0, x: -40 }}
                    transition={{ type: "spring", stiffness: 400,duration: 1, delay: 0.5 }}              
                to="/"
                > <NavLink href="About"><Logo src={LogoImg} alt="logo" /> </NavLink></NavLogo>
                <NavItems
                    animate={{ x: 0, y: 0 }}
                    initial={{ y: -50 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.5 }}  
                >
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Projects">Project</NavLink>
                    {/* <NavLink href="#Experience">Experience</NavLink> */}
                    <NavLink href="#Education">Education</NavLink>
                    <NavLink href="#About">About</NavLink>
                </NavItems>

                <ButtonContainer
                    animate={{ x: 0, y: 0 }}
                    initial={{ x: 200}}
                    transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                >
                    <GitButton href={bio.github} target="blank">GitHub Profile</GitButton>
                </ButtonContainer>
                
                <MobileIcon onClick={()=>setIsopen(!isOpen)}>
                    <MenuRounded/>
                </MobileIcon>

                {isOpen &&(
                    <MobileMenu>                    
                        <NavLink href="#About" onClick={()=>setIsopen(!isOpen)} >About</NavLink>
                        <NavLink href="#Skills" onClick={()=>setIsopen(!isOpen)} >Skills</NavLink>
                        <NavLink href="#Projects" onClick={()=>setIsopen(!isOpen)}>Project</NavLink>
                        <NavLink href="#Projects" onClick={()=>setIsopen(!isOpen)}>Experience</NavLink>
                        <NavLink href="#Education" onClick={()=>setIsopen(!isOpen)}>Education</NavLink>
                        
                        <GitButton href={bio.github} target="blank" 
                            style={{width: "100%",textAlign:"center",backgroundColor:theme.primary,color:theme.text_primary}}
                        >
                        GitHub Profile</GitButton>
                        
                    </MobileMenu>
                )
                }

            </NavbarContainer>
        </Nav>
    )
}