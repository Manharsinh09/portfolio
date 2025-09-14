import React from "react";
import styled from "styled-components";
import {bio} from "../data/profile";
import Typewriter from 'typewriter-effect';
import heroimg from "../images/20250425_182834.jpg"
import { HeroBgAnimation } from "./HeroBgAnimation/HeroBgAnimation";
import { motion } from "motion/react";
const HeroContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 30px;
    
    font-family: 'IBM Plex Sans', sans-serif;
    // clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    @media screen and (max-width: 960px){
        padding: 60px 20px;
    }

`;
const HeroInerContainer = styled.div`

    position: relative;
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 960px){
        flex-direction: column;
        
    }
`;
const HeroLeftContainer = styled(motion.div)`
    width: 100%;
    // background: red;
    @media screen and (max-width: 960px){
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        // padding: 0 20px;

    }

`;
const HeroRightContainer = styled(motion.div)`
    width: 100%;
    // background: blue;
    display: flex;
    justify-content: end;

    @media screen and (max-width: 960px){
        order:1;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }  
    
    @media screen and (max-width: 640px){
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 45px;
    font-weight: 700;
    color: ${({theme})=> theme.text_primary};

    @media screen and (max-width: 960px){
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        line-height: 40px;
    }
`;

const TextLoop = styled.div`
    font-size: 30px;
    font-weight: 600;
    display: flex;
    gap: 12px;
    color: ${({theme})=> theme.text_primary};
    @media screen and (max-width: 960px){
        font-size: 25px;
        font-weight: 600px;
        text-align: center;
    }
    
`;
const Span = styled.div`
    cursor: pointer;
    color: ${({theme})=>theme.primary};
`;
const SubTitle = styled.div`
    color: ${({theme})=> theme.text_primary};
    margin-top: 14px;
    font-size: 18px;
    line-height: 30px;

    @media (max-width: 960px){
        text-align: center;
        font-size: 16px;
        line-height: 28px;
    }
`;

const HeroImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 4px solid ${({theme})=>theme.primary};
    opacity: 60%;
    @media screen and (max-width:640px){
        width: 280px;
        height: 280px;
        
    }
`;
const HeroBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 1300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: right;

    @media screen and (max-width: 960px){
        justify-content: center;
        align-items: flex-start;
    }  
    
    
 
`;
const Button = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    border: none;    
    background: linear-gradient(to right, #5f179eff, #962383ff);
    color: ${({theme})=>theme.text_primary};
    cursor: pointer;
    transition: all 0.3s ease-in-out;   
    &:hover{
        background: ${({theme})=>theme.primary_hover};
        color: #fff;
        transform: scale(1.05);
    }
    

`;
export const HeroSection = () =>{

    return (
        
        <HeroContainer id="About">
            <HeroBg>
                <HeroBgAnimation/>
            </HeroBg>
            <HeroInerContainer>
                <HeroLeftContainer
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ x: 0, y:0,opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}

                >
                    <Title>Hello, i'm <br/> {bio.name} </Title>
                    <TextLoop>i'm a
                        <Span>
                            <Typewriter
                            options={{
                                strings: bio.roles,
                                autoStart: true,
                                loop: true,
                            }}                            
                            />    
                            
                        </Span>
                    </TextLoop>
                    <SubTitle>{bio.description}</SubTitle>
                    <Button>RESUME</Button>
                </HeroLeftContainer>
                <HeroRightContainer
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                    }}
                >
                    <HeroImg src={heroimg}></HeroImg>
                </HeroRightContainer>
            </HeroInerContainer>    
        </HeroContainer>
    )
}