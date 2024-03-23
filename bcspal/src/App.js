import styled from "styled-components"
import Hero from './components/Hero';
import WhatWeDo from "./components/WhatWeDo";
import Features from "./components/Features";
import IntegrationP from "./components/IntegrationP";
import Integrations from "./components/Integrations";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::webkit-scrollbar {
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Hero />
      <WhatWeDo /> 
      <Features />
      <IntegrationP />
      <Integrations />
    </Container>
  )
}

export default App
