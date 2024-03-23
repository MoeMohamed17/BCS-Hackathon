import React from "react";
import styled from "styled-components";

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;
const Logo = styled.img`
    height: 50px;
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
`;
const Button = styled.button`
    cursor: pointer;
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
`;


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo-simple-cropped.webp" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Features</ListItem>
                        <ListItem>Integrations</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Button>Try Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar