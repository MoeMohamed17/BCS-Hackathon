import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components"
import Scene from "./Scene"; 
import UBC from "./UBC";
// import Badge_3 from "./Badge_3";
import Advantages from "./Advantages";

const Section = styled.div`
  height: 100vh;
  scroll-snap-type: center;
  scroll-snap-type: y mandatory;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-size: 74px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.hr`
  width: 15px;
`
const Subtitle = styled.h2`
  color: #da4ea2;
`
const Description = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #9638E5;
  }
`


const Features = () => {
    return (
        <Section>
          <Container>
            <Left>
               <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[3,2,1]} />
                <UBC scale={[80, 80, 80]} />
                {/* <Scene scale={[1, 1, 1]} /> */}

                {/* <Badge_3 scale={[80, 80, 80]} /> */}
                <OrbitControls enableZoom={false} autoRotate />
               </Canvas>
            </Left>
            <Right>
              <Title>A BCS Discord Bot</Title>
              <WhatWeDo>
                {/* <Line src="./img/line.png" /> */}
                <ul>
                  <Advantages />
                </ul>
                {/* <Subtitle>What we Are</Subtitle> */}
              </WhatWeDo>
              {/* <Description>a creative group of designers and developers with a passion for the arts.</Description> */}
              <Button>Use our bot!</Button>
            </Right>
          </Container>
        </Section>
    )
}

export default Features