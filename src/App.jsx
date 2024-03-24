import { useRef } from "react";
import { useScroll } from "framer-motion";
import styled from "styled-components"
import Hero from './components/Hero';
import WhatWeDo from "./components/WhatWeDo";
import Features from "./components/Features";
import IntegrationP from "./components/IntegrationP";
import Integrations from "./components/Integrations";
import Parallax from "./components/parallax/Parallax";
import Background from "./components/Background";

const Container = styled.div`
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::webkit-scrollbar {
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Background />
      <Hero />
      <Parallax type="services" />
      <Features id="features"/>
      <Parallax type="integrations" />
      <Integrations />
    </Container>
  )
}

export default App
