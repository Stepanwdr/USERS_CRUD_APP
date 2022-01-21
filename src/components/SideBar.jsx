import React from 'react';
import styled from "styled-components";
import Flex from "./Flex";
import NavBar from "./NavBar";
import Logo from "./Logo";

const SideBar = (props) => {

    return (
        <SideBarContainer {...props}>
            <Flex direction={"column"}>
                <Logo/>
                <NavBar/>
            </Flex>
        </SideBarContainer>
    );
};
const SideBarContainer = styled.div`
width: 20vw;
height: 100vh;
background-color: white;
display: flex;
z-index: 100;
justify-content:flex-start;
flex-direction: column;
position: fixed;
box-shadow: 0 0  1.8rem rgba(0,0,0,0.1);
border-radius: 2rem 0 2rem 2rem;
@media (max-width: 768px){
overflow: hidden;
flex-direction: column;
max-height: ${(props) => (props.navIsOpen ? "100%" : "0")};
transition: max-height 0.7s ease-in;
width: 100%;
border-radius: 0 0 2rem 2rem;

}
`


export default SideBar;