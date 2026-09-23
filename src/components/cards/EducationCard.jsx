import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const CardContainer = styled.div`
    width: 100%;
    max-width: 520px;
`;

const Card = styled.div`
    width: 100%;
    padding: 24px;
    border-radius: 16px;
    background: rgba(9, 16, 43, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    cursor: default;

    &:hover {
        box-shadow: rgba(133, 76, 230, 0.35) 0px 8px 30px;
        border-color: rgba(133, 76, 230, 0.5);
    }

    @media (max-width: 478px) {
        padding: 18px;
        gap: 10px;
    }
`;

const EducationHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 16px;

    @media (max-width: 478px) {
        gap: 12px;
    }
`;

const Image = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 12px;
    object-fit: contain;
    padding: 4px;
    border: 2px solid ${({ theme }) => theme.primary}60;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;

    @media (max-width: 478px) {
        width: 46px;
        height: 46px;
        border-radius: 10px;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
`;

const InstituteTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.3;

    @media (max-width: 478px) {
        font-size: 17px;
    }
`;

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    line-height: 1.3;

    @media (max-width: 478px) {
        font-size: 12.5px;
    }
`;

const DateText = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.85;

    @media (max-width: 478px) {
        font-size: 11px;
    }
`;

const GradeBadge = styled.div`
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: 4px 12px;
    font-size: 12.5px;
    font-weight: 600;
    border-radius: 20px;
    background: rgba(133, 76, 230, 0.12);
    border: 1px solid ${({ theme }) => theme.primary}40;
    color: ${({ theme }) => theme.primary};
    margin: 2px 0;

    @media (max-width: 478px) {
        font-size: 11.5px;
        padding: 3px 10px;
    }
`;

const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0;
    text-align: justify;

    @media (max-width: 478px) {
        font-size: 13px;
        line-height: 1.5;
        text-align: left;
    }
`;

export const EducationCard = ({ education }) => {
    return (
        <CardContainer>
            <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.01}
                transitionSpeed={800}
            >
                <Card>
                    <EducationHeader>
                        <Image src={education.img} alt={education.institute} />
                        <HeaderContainer>
                            <InstituteTitle>{education.institute}</InstituteTitle>
                            <Degree>{education.degree}</Degree>
                            <DateText>{education.date}</DateText>
                        </HeaderContainer>
                    </EducationHeader>

                    {education.grade && (
                        <GradeBadge>
                            Grade: {education.grade}
                        </GradeBadge>
                    )}

                    <Description>{education.description}</Description>
                </Card>
            </Tilt>
        </CardContainer>
    );
};