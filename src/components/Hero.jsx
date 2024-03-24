import React from "react";
import styled from "styled-components"
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-type: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-snap-type: y mandatory;
`

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1801px) {
    width: 60%;
    max-width: none;
  }

`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  animation: fadeInDown 1s ease forwards;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-200px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Title = styled.h1`
  font-size: 74px;
  
  
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

const Right = styled.div`
  flex: 3;
  position: relative;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #9638E5;
  }

`
const Img = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 150px;
  bot: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }

  @media (min-width: 1800px) { 
      width: 800px; 
      height: 600px;
      top: 280px;
  }

`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left className="faded-in-top">
          <Title>Real-time BCS Insights.</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>answered by BCS' Discord Bot</Subtitle>
          </WhatWeDo>
          <Description>Get Your Answers On-the-Fly with BCS Pal!</Description>
          <Button><a href="https://discord.com/channels/1220504925042376704/1220504925042376706" target="_blank" style={{ textDecoration: 'none' }}>Demo</a></Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={7} />
            <directionalLight position={[20, 50, 20]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial color={"#582882"} attach="material" distort="0.5" speed={2} />
            </Sphere>
          </Canvas>
          <Img src="./img/discord1.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero