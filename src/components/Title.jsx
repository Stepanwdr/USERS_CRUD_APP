import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  color: ${(props) => props.color || "black"};
  @media(max-width: 768px){
font-size: 16px;
}
`;
const Title = (props) => {
    return <StyledTitle {...props} />;
};

export default Title;
