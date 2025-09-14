import React from "react";
import styled from "styled-components";
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react";

const Card = styled(motion.div)`
    width: 100%;
    max-width: 300px;
    padding: 20px;
    border-radius: 16px;
    background-color: rgba(9, 16, 43, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.125);
    display: flex;
    flex-direction: column;
    gap: 5px;
    // @media (max-width:478px){
    //     padding: 20px;
    // }
`;

const TagList = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const  TagItems = styled.div`

    padding: 5px 10px;
    font-size: 12px;
    font-wight: 500;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: ${({theme})=>theme.primary};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    
`;
const ProjectTitle = styled.div`
    font-size: 18px;
    font-wight: 600;    
    color: ${({theme})=>theme.text_primary};

`;

const ProjectDescription = styled.div`
    font-size: 15px;
    font-wight: 500;
    color: ${({theme})=>theme.text_secondary};
`;

const Date = styled.div`
    font-size: 12px;
    margin-top: -5px;
    color: ${({theme})=>theme.text_secondary};

`;
const ProjectLink = styled.a`
    font-size: 14px;
    font-wight: 500;
    color: ${({theme})=>theme.primary};
    margin-top: 10px;
    text-decoration: none;
    

`;
export const ProjectCard = ({project})=>{

    return(
        <Tilt>
            
        <Card
        
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}
            viewport={{amount:0.5, once:true}}
        >
            <Image src={project.image}></Image>
            <TagList>
                { project.tages.map((val)=><TagItems>{val}</TagItems>) }
            </TagList>
            <ProjectTitle>{project.title}</ProjectTitle>
            <Date>{project.date}</Date>
            <ProjectDescription>
                {project.discription}
            </ProjectDescription>
            <ProjectLink href={project.webapp} target="_blank" rel="noopener noreferrer">Visit Project</ProjectLink>
        </Card>

        </Tilt>
    )

}