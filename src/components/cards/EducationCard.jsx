import { Subtitles } from "@mui/icons-material";
import { motion } from "motion/react";
import React from "react";
import styled from "styled-components";

    const Card = styled(motion.div)`
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 16px;
    background-color: rgba(9, 16, 43, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.125);
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const EducationHeader = styled.div`
    width:100%;
    display: flex;
    gap: 10px;
`;
const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 12%;
    object-fit: contain;
    margin-top: 10px;
    border: 3px solid ${({theme})=>theme.primary};
    background-color: white;
`;
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${({theme})=>theme.text_primary};
`;
const SubTitle = styled.div`
    font-size: 14px;
    color: ${({theme})=>theme.text_secondary};
`;


const HeaderContainer= styled.div``;
const EducationContainer = styled.div`
    color: ${({theme})=>theme.text_secondary};
`;
export const EducationCard = ({education}) =>{
    return(

        <Card
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.5, type:'spring'}}
            viewport={{amount:0.5, once:true}}
        >
            <EducationHeader>
                <Image src={education.img}/>
                <HeaderContainer>
                    
                    <Title>{education.institute}</Title>
                    <SubTitle>
                        <b>{education.degree}</b><br/>
                        {education.date}
                    </SubTitle>
                </HeaderContainer>
            </EducationHeader>
            <EducationContainer>
                <br/><b>Grade: {education.grade}</b><br/>
                {education.description}
            </EducationContainer>
        </Card>
        
    )
}