import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ProjectCard } from "./cards/ProjectCard";
import { projectData } from "../data/profile";
import { motion } from "motion/react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Wrapper = styled.div`
    width: 100%;    
    background: linear-gradient(to right, #5a1a929c, #962383ab, #5c103a96);
`;

const Container = styled.div`
    width: 100%;
    padding: 30px 20px 70px;
    clip-path: polygon(30% 0.1%, 100% 12%, 100% 100%, 0% 100%, 0% 10%);
    background-color: ${({ theme }) => theme.bg};  
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
    position: relative;

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
    margin: 20px 0 10px;
`;

const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 52px;
    font-weight: 600;
    padding: 20px 20px 10px 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 478px){
        font-size: 36px;
    }
`;

const Description = styled.div`
    width: 80%;
    max-width: 700px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 478px){
        font-size: 16px;
        width: 95%;
    }    
`;

const CarouselSection = styled.div`
    width: 100%;
    max-width: 1140px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Viewport = styled.div`
    width: 100%;
    overflow: hidden;
    padding: 15px 5px;
`;

const Track = styled.div`
    display: flex;
    gap: ${({ $gap }) => `${$gap}px`};
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    transform: ${({ $currentIndex, $cardsPerView, $gap }) =>
        `translateX(calc(-${$currentIndex} * ((100% - ${($cardsPerView - 1) * $gap}px) / ${$cardsPerView} + ${$gap}px)))`};
`;

const SlideItem = styled.div`
    flex: 0 0 ${({ $cardsPerView, $gap }) =>
        `calc((100% - ${($cardsPerView - 1) * $gap}px) / ${$cardsPerView})`};
    min-width: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ $direction }) => ($direction === "left" ? "left: -22px;" : "right: -22px;")}
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgba(17, 25, 40, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;

    &:hover {
        background: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 20px rgba(133, 76, 230, 0.6);
        transform: translateY(-50%) scale(1.1);
    }

    &:active {
        transform: translateY(-50%) scale(0.95);
    }

    @media (max-width: 1200px) {
        ${({ $direction }) => ($direction === "left" ? "left: 4px;" : "right: 4px;")}
    }

    @media (max-width: 600px) {
        width: 38px;
        height: 38px;
    }
`;

const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 25px;
`;

const Dot = styled.button`
    height: 10px;
    width: ${({ $active }) => ($active ? "28px" : "10px")};
    border-radius: 10px;
    background: ${({ $active, theme }) =>
        $active
            ? `linear-gradient(135deg, ${theme.primary} 0%, #be1adb 100%)`
            : "rgba(255, 255, 255, 0.25)"};
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow: ${({ $active, theme }) =>
        $active ? `0 0 10px ${theme.primary}` : "none"};

    &:hover {
        background: ${({ $active, theme }) =>
        $active
            ? `linear-gradient(135deg, ${theme.primary} 0%, #be1adb 100%)`
            : "rgba(255, 255, 255, 0.5)"};
    }
`;

export const Project = () => {
    const gap = 24;
    const totalCards = projectData.project.length;

    const getCardsPerView = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth < 680) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const maxIndex = Math.max(0, totalCards - cardsPerView);

    useEffect(() => {
        const handleResize = () => {
            const count = getCardsPerView();
            setCardsPerView(count);
            setCurrentIndex((prev) => Math.min(prev, Math.max(0, totalCards - count)));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [totalCards]);

    // Auto slide with pause on hover
    useEffect(() => {
        if (isPaused || maxIndex === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }, 4500);

        return () => clearInterval(interval);
    }, [isPaused, maxIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    // Touch swipe support
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 50) {
            handleNext();
        } else if (diff < -50) {
            handlePrev();
        }
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    return (
        <Wrapper id="Projects">
            <Container>
                <ProjectHeader
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.5, once: true }}
                >
                    <Title>My Projects</Title>
                    <Description>{projectData.discription}</Description>
                </ProjectHeader>

                <CarouselSection
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <SliderWrapper>
                        {totalCards > cardsPerView && (
                            <NavButton
                                $direction="left"
                                onClick={handlePrev}
                                aria-label="Previous Projects"
                            >
                                <ChevronLeftRoundedIcon style={{ fontSize: "28px" }} />
                            </NavButton>
                        )}

                        <Viewport>
                            <Track
                                $currentIndex={currentIndex}
                                $cardsPerView={cardsPerView}
                                $gap={gap}
                            >
                                {[...projectData.project].reverse()
                                    .map((pro) => (
                                        <SlideItem
                                            key={pro.id}
                                            $cardsPerView={cardsPerView}
                                            $gap={gap}
                                        >
                                            <ProjectCard project={pro} />
                                        </SlideItem>
                                    ))}
                            </Track>
                        </Viewport>

                        {totalCards > cardsPerView && (
                            <NavButton
                                $direction="right"
                                onClick={handleNext}
                                aria-label="Next Projects"
                            >
                                <ChevronRightRoundedIcon style={{ fontSize: "28px" }} />
                            </NavButton>
                        )}
                    </SliderWrapper>

                    {maxIndex > 0 && (
                        <Pagination>
                            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                                <Dot
                                    key={idx}
                                    $active={idx === currentIndex}
                                    onClick={() => setCurrentIndex(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </Pagination>
                    )}
                </CarouselSection>
            </Container>
        </Wrapper>
    );
};