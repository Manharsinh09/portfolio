import react from "react";
import styled from "styled-components";
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react";

const Card = styled(motion.div)`
    width: 100%;
    max-width: 500px;
    padding: 30px;
    border-radius: 16px;
    background-color: rgba(9, 16, 43, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 16px;

    @media (max-width:478px){
        padding: 20px;
    }


`;
const Title = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 30px;
    color: ${({theme})=>theme.text_primary};
`;
const SkillList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;    
    gap: 10px;
`;
const SkillItem = styled.div`
    font-size: 15px;
    padding: 15px 20px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${({theme})=> theme.text_secondary};
    @media (max-width:478px){
        font-size: 13px;
        padding: 10px 15px;
    }
`;
const Image = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;
export const SkillCard = ({skill}) =>{
    
    return (
        <Tilt>
            <Card key={skill.index}
            
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay: skill.index*0.2}}                    
                viewport={{once:true, amount:0.5}}
            >
                {console.log(skill.index)}
                <Title>{skill.title}</Title>
                <SkillList>
                    {
                        skill.skills.map((val,ind)=>(
                            <SkillItem key={ind}>
                                <Image src={val.image}/>
                                {val.name}
                            </SkillItem>)
                        )
                            
                    }
                </SkillList>
            </Card>
        </Tilt>

    )
}