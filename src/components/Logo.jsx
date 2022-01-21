import React from 'react';
import styled from "styled-components";
import {dangerColor} from "../utils";
const Logo = () => {
    return (
        <LogoContainer>
        <span>CRUD</span>SYSTEMS
        </LogoContainer>
    );
};
const LogoContainer=styled.div`
color: {primaryColor};
font-size: 1.2rem;
font-weight: 600;
margin: 20px 0;
text-align: center;
span{
font-weight: 900;
color:${dangerColor}
}
@media(max-width: 768px){
margin: 50px 0 0 0 ;
}
`
export default Logo;