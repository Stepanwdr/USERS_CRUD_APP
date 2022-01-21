import React from 'react';
import styled, {css, keyframes} from "styled-components";
import {dangerColor, primaryColor, secondaryColor, successColor} from "../utils";
const Button = (props) => {
    return (
        <StyledButton {...props}/>
    );
}
const StyledButton = styled.button`
padding: 10px 15px;
cursor: pointer;
font-size: 16px;
align-self: ${(props) => props.align || "stretch"};
margin: ${(props) => props.margin || "0"};
border-radius: 1rem;
border:none;
color:white;
&:focus {
outline: none;
}
&:hover {

}
@media(max-width: 768px){
min-height: 10px;
padding: 6px;
font-size: 12px;
}
@media(max-width: 428px){

}
${(props) =>
    props.primary &&
    css`
background-color: ${primaryColor};
${(props) => props.color || "white"};
`}
${(props) =>
    props.secondary &&
    css`
background-color: ${secondaryColor};
${(props) => props.color || "white"};
`}
${(props) =>
    props.success &&
    css`
background-color: ${successColor};
${(props) => props.color || "white"};
`}
${(props) =>
    props.danger &&
    css`
background-color: ${dangerColor};
${(props) => props.color || "white"};
`}
`
export default Button;