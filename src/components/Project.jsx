import react from 'react';
import styled from 'styled-components';
import { ProjectCard } from './cards/ProjectCard';
import { projectData } from '../data/profile';
import { motion } from 'motion/react';

const Wrapper = styled.div`
    width:100%;    
    background: linear-gradient(to right, #5a1a929c, #962383ab, #5c103a96);
`;
const Container = styled.div`
    width: 100%;
    padding: 10px 50px;
    clip-path: polygon(30% 0.1%, 100% 12%, 100% 100%, 0% 100%, 0% 10%);
    background-color: ${({theme})=>theme.bg};  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
     @media (max-width: 752px) {
        padding-top: 50px;
        clip-path: polygon(28% 0.1%, 100% 8%, 100% 100%, 0% 100%, 0% 6%);
    }

    @media (max-width: 476px) {
        clip-path: polygon(26% 0.1%, 100% 6%, 100% 100%, 0% 100%, 0% 4%);
    }
`;
const ProjectHeader = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 30px 0;

`;
const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 52px;
    font-weight: 600;
    padding: 30px 30px 10px 30px;
    color: ${({theme})=>theme.text_primary};
    @media (max-width: 478px){
        font-size: 36px;
    }
`;
const Discription = styled.div`
    width: 80%;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${({theme})=>theme.text_secondary};
    @media (max-width: 478px){
        font-size: 18px;
    }    
`;

const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
`;

export const Project = () => {
    return(
        <Wrapper id="Projects">
            <Container>
                <ProjectHeader
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.5}}
                    viewport={{amount:0.5, once:true}}
                >
                    <Title>My Projects</Title>
                    <Discription>{projectData.discription}</Discription>
                </ProjectHeader>
                <ProjectContainer>
                    {projectData.project.map((pro)=><ProjectCard project={pro}/>)}
                </ProjectContainer>
            </Container>
        </Wrapper>
    )
}