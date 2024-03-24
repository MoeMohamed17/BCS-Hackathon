import React from "react";
import styled from "styled-components";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::webkit-scrollbar {
    display: none;
  }
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -100;
`;

const Background = () => {
    return (
        <Container></Container>
    )
}

export default Background