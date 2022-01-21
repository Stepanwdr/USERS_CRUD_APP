import React from 'react';
import styled from "styled-components";
import Flex from "./Flex";

const Header = ({children}) => {
    return (
        <HeaderContainer>
            <Flex justify="space-between">
                {children}
            </Flex>
        </HeaderContainer>
    );
};
const HeaderContainer = styled.div`
width: 100vw;
background-color: white;
box-shadow: 0 10px 19px -14px rgba(0,0,0,0.3);
position: fixed;
margin-left: 20vw;
z-index: 1000;
transition: all linear 0.1s;
@media(max-width:768px){
margin:0
}
`



export default Header;