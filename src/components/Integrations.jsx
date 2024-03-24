import React from "react";
import styled from "styled-components";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const items = [
    "Tech Career North Server",
    "Official UBC BCS Server"
];


const Section = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    height: 100vh;
    width: 1200px;
    display: flex;
    justify-content: space-between;

    @media (min-width: 1801px) {
        width: 65%;
        max-width: none;
      }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 100px;
`
const ListItem = styled.li`
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;

    &::after{
        content: "${(props) => props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: #D94EA2;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        &::after {
            animation: moveText 0.5s linear both;
            
            @keyframes moveText {
                to{
                    width: 100%;
                }
            }
        }
    }
`
const Right = styled.div`
    flex: 1;
    padding-top: 100px;
`



const Integrations = () => {

    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {items.map((item) => (
                            <ListItem key={item} text={item}>{item}</ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    <Canvas>
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Scene scale={[1.15, 1.15, 1.15]} />
                        <OrbitControls enableZoom={false} autoRotate />
                    </Canvas>
                </Right>
            </Container>
        </Section>
    )
};

export default Integrations