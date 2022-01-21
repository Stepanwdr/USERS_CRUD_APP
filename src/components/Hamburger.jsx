import {setNavIsOpen} from "../store/actions/modals";
import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {primaryColor} from "../utils";
const Hamburger = () => {
    const {navIsOpen}=useSelector(state=>state.modals)
    const dispatch=useDispatch()
    return (
        <HamburgerContainer onClick={() => dispatch(setNavIsOpen(!navIsOpen))}>
            <span/>
            <span/>
            <span/>
        </HamburgerContainer>

    );
};

export default Hamburger;


const HamburgerContainer = styled.div`
width: 40px;
display: flex;
flex-direction: column;
padding: 5px;
cursor: pointer;
visibility: hidden;
span{
background-color:${primaryColor};
width: 100%;
height: 5px;
margin-top: 4px;
border-radius: 1rem;
}
@media(max-width: 768px){
z-index: 1000;
visibility: visible;
}
`