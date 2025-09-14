import react from "react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Chrono } from "react-chrono";
import { education } from "../data/profile";
import { EducationCard } from "./cards/EducationCard";
import { motion } from "motion/react";
const Wrapper = styled.div`
    width:100%;    
    background-color: ${({theme})=>theme.bg} ;
`;
const Container = styled.div`
    width: 100%;
    padding: 50px 50px;
    background-color: ${({theme})=>theme.bg};  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
    z-index: 1;
    background: linear-gradient(to right, #5a1a9217, #96238317, #5c103a1e);
    clip-path: polygon(35% 3%, 100% 7%, 100% 97%, 64% 100%, 0 95%, 0 4%);
    @media (max-width: 530px){
        clip-path: polygon(10 3%, 100% 2%, 100% 98%, 55% 100%, 0 99%, 0 2%);
         padding-bottom: 80px;
    }
`;

const EducationHeader = styled(motion.div)`
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

const MobileView = styled.div`
    display: none;

    @media (max-width: 568px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
`;

export const Education = () =>{
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 568);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 568);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return(
        <Wrapper>
            <Container>
                <EducationHeader id="Education"
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.5, type:'spring'}}
                    viewport={{amount:0.5, once:true}}
                >
                     <Title>My Education</Title>
                    <Discription>Fueled by curiosity and ambition, my education empowered me to think bigger and aim higher. Here is a brief overview of my academic journey,</Discription>
                
                </EducationHeader>

               {/* <Chrono
                    className="custom-chrono"
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={'auto'}
                    enableBreakPoint={true}
                    lineWidth={5}
                    hideControls 
                    disableNavOnKey
                    disableToolbar={true} 
                    timelinePointDimension={30}
                    timelinePointShape="diamond"
                    borderLessCards={true}
    
                    focusActiveItemOnScroll={true} 
                    theme={{
                        primary: 'White',
                        secondary: 'white',
                        cardBgColor: 'transparent',
                        cardDetailsBackGround: 'transparent',
                    }}
                >

                    {
                        education.map((edu, index)=>(
                            <EducationCard key={index} education={edu} />
                        ))
                    }
                
                </Chrono> */}

                        {!isMobile ? (
                        <Chrono
                            className="custom-chrono"
                            mode="VERTICAL_ALTERNATING"
                            cardHeight={"auto"}
                            enableBreakPoint={true}
                            lineWidth={5}
                            hideControls
                            disableNavOnKey
                            disableToolbar={true}
                            timelinePointDimension={30}
                            timelinePointShape="diamond"
                            borderLessCards={true}
                            focusActiveItemOnScroll={true}
                            theme={{
                                primary: "White",
                                secondary: "white",
                                cardBgColor: "transparent",
                                cardDetailsBackGround: "transparent",
                            }}
                        >
                            {education.map((edu, index) => (
                                <EducationCard key={index} education={edu} />
                            ))}
                        </Chrono>
                    ) : (
                        <MobileView>
                            {education.map((edu, index) => (
                                <EducationCard key={index} education={edu} />
                            ))}
                        </MobileView>
                    )}
    
                        
                
            </Container>
        </Wrapper>
    )
}