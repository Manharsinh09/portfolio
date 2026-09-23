import React from "react";
import styled from "styled-components";
import { education } from "../data/profile";
import { EducationCard } from "./cards/EducationCard";
import { motion } from "motion/react";

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    background-color: ${({ theme }) => theme.bg};
`;

const Container = styled.div`
    width: 100%;
    padding: 60px 20px 80px;
    background-color: ${({ theme }) => theme.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background: linear-gradient(to right, #5a1a9217, #96238317, #5c103a1e);
    clip-path: polygon(35% 1%, 100% 4%, 100% 99%, 64% 100%, 0 97%, 0 2%);

    @media (max-width: 768px) {
        clip-path: none;
        padding: 40px 16px 60px;
    }
`;

const EducationHeader = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
`;

const Title = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 52px;
    font-weight: 600;
    margin: 0;
    padding: 20px 20px 10px 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 478px) {
        font-size: 36px;
    }
`;

const Description = styled.p`
    width: 80%;
    max-width: 700px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin: 0 auto;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.5;

    @media (max-width: 478px) {
        font-size: 16px;
        width: 95%;
    }
`;

const TimelineContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 30px;
`;

const TimelineTrack = styled.div`
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 50%;
    width: 4px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #854CE6 0%, #be1adb 50%, #854CE6 100%);
    border-radius: 2px;
    box-shadow: 0 0 12px rgba(133, 76, 230, 0.4);

    @media (max-width: 768px) {
        left: 20px;
        transform: none;
    }
`;

const TimelineItem = styled(motion.div)`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: ${({ $isLeft }) => ($isLeft ? "flex-start" : "flex-end")};
    align-items: center;

    @media (max-width: 768px) {
        justify-content: flex-start;
        padding-left: 48px;
    }
`;

const TimelineNode = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    border: 3px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 12px ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: transform 0.3s ease;

    &:hover {
        transform: translate(-50%, -50%) scale(1.2);
    }

    @media (max-width: 768px) {
        left: 20px;
        top: 32px;
        transform: translate(-50%, 0);

        &:hover {
            transform: translate(-50%, 0) scale(1.2);
        }
    }
`;

const NodeDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 6px ${({ theme }) => theme.primary};
`;

const TimelineCardWrapper = styled.div`
    width: 46%;
    display: flex;
    justify-content: ${({ $isLeft }) => ($isLeft ? "flex-end" : "flex-start")};

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const Education = () => {
    return (
        <Wrapper id="Education">
            <Container>
                <EducationHeader
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.3, once: true }}
                >
                    <Title>My Education</Title>
                    <Description>
                        Fueled by curiosity and ambition, my education empowered me to think bigger and aim higher. Here is a brief overview of my academic journey.
                    </Description>
                </EducationHeader>

                <TimelineContainer>
                    <TimelineTrack />
                    {education.map((edu, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <TimelineItem
                                key={edu.id ?? index}
                                $isLeft={isLeft}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 80,
                                }}
                                viewport={{ amount: 0.2, once: true }}
                            >
                                <TimelineNode>
                                    <NodeDot />
                                </TimelineNode>
                                <TimelineCardWrapper $isLeft={isLeft}>
                                    <EducationCard education={edu} />
                                </TimelineCardWrapper>
                            </TimelineItem>
                        );
                    })}
                </TimelineContainer>
            </Container>
        </Wrapper>
    );
};