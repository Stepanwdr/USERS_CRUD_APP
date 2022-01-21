import React from 'react';
import Flex from "./Flex";
import styled from "styled-components";
import {dangerColor, darkColor, successColor} from "../utils";



const MyConfirm = ({setConfirmIsOpen,handleUserDelete,name}) => {
    return (
        <MyConfirmContainer>
            <Flex align={"center"}>
                <YesButton onClick={handleUserDelete}>
                    Yes
                </YesButton>
                <NoButton onClick={()=>setConfirmIsOpen({
                    isOpen:false,
                    userId:null
                })}>
                    No
                </NoButton>
                 <Question>
                    Are You sure delete {name} ?
                    </Question>
            </Flex>
        </MyConfirmContainer>
    );
};

export default MyConfirm;

const MyConfirmContainer = styled.div`
padding: 5px;
border-radius: 10px 0 0 10px;
font-weight:700;
background-color: white;
position: absolute;
right: 0;
font-size: 10px;


`
const YesButton = styled.button`
padding: 5px;
background-color: ${dangerColor};
color: white;
border: none;
outline: none;
cursor:pointer;
border-radius: 5px;
`
const NoButton = styled.button`
padding: 5px;

background-color: ${successColor};
color: white;
border: none;
border-radius: 5px;
outline: none;
cursor:pointer;
margin: 0 5px;
`
const Question=styled.div`
color: ${darkColor};
white-space: pre-wrap;

`