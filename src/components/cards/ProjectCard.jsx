import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const Card = styled(motion.div)`
    width: 100%;
    height: 490px;
    padding: 18px;
    border-radius: 16px;
    background-color: rgba(9, 16, 43, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.125);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

    &:hover {
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 8px 30px rgba(133, 76, 230, 0.25);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
    margin: 10px 0;
`;

const TagList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
    max-height: 52px;
    overflow: hidden;
`;

const TagItems = styled.span`
    padding: 3px 8px;
    font-size: 11px;
    font-weight: 500;
    border-radius: 6px;
    background: rgba(133, 76, 230, 0.12);
    border: 1px solid rgba(133, 76, 230, 0.3);
    color: ${({ theme }) => theme.primary};
`;

const ProjectTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 3px 0 6px 0;
`;

const ProjectDescription = styled.div`
    font-size: 13.5px;
    line-height: 1.45;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
`;

const ProjectLink = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 16px;
    border-radius: 10px;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, #be1adb 100%);
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: border-box;
    box-shadow: 0 4px 14px rgba(133, 76, 230, 0.35);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(133, 76, 230, 0.55);
        color: #ffffff;
    }
`;

export const ProjectCard = ({ project }) => {
    return (
        <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            style={{ width: "100%", height: "100%", display: "flex" }}
        >
            <Card
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.2, once: true }}
            >
                <Image src={project.image} alt={project.title} />
                <Content>
                    <TagList>
                        {project.tages?.map((val, idx) => (
                            <TagItems key={idx}>{val}</TagItems>
                        ))}
                    </TagList>
                    <ProjectTitle title={project.title}>{project.title}</ProjectTitle>
                    <Date>{project.date}</Date>
                    <ProjectDescription title={project.discription}>
                        {project.discription}
                    </ProjectDescription>
                </Content>
                <ProjectLink href={project.webapp} target="_blank" rel="noopener noreferrer">
                    <span>View Project</span>
                    <LaunchRoundedIcon style={{ fontSize: "16px" }} />
                </ProjectLink>
            </Card>
        </Tilt>
    );
};