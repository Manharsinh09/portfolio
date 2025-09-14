import React from "react";
import styled from "styled-components";
import { skills } from "../data/profile";
import { SkillCard } from "./cards/SkillCard";
import { motion } from "motion/react";


const Wrapper = styled.div`
    width:100%;    
    background-color: ${({theme})=>theme.skill_bg};
    padding: 50px 0;
    @media (max-width: 478px){
        padding: 30px 0;
    }

`;
const Container = styled.div`
    width: 85%;
    margin: auto;
    padding: 50px 0;
    @media (max-width: 478px){
        width: 90%;
    }

`;
const SkillHeader = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
`;
const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 52px;
    font-weight: 600;
    color: ${({theme})=>theme.text_primary};
    @media (max-width: 478px){
        font-size: 36px;
    }
`;
const Description = styled.div`
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${({theme})=>theme.text_secondary};
    @media (max-width: 478px){
        font-size: 18px;
    }    
`;
const SkillContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 20px;
    
`;

export const Skills = () =>{
    return(
        <Wrapper id="Skills">
            <Container>
                <SkillHeader
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.5}}                    
                    viewport={{once:true, amount:0.5}}
                >
                    <Title>Skilles</Title>
                    <Description>{skills.description}</Description>
                </SkillHeader>
                <SkillContainer>
                {skills.categories.map((skill)=> <SkillCard skill={skill}/>)}
                </SkillContainer>
            </Container>
        </Wrapper>
    )
}