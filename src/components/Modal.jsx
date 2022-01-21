import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import Title from "./Title";
import Flex from "./Flex";
import {setModalIsOpen} from "../store/actions/modals";
const Modal = ({children,title}) => {
    const {modalIsOpen} = useSelector(state => state.modals)
    const dispatch=useDispatch()
    const handleClose =  (ev) => {
        ev.stopPropagation()
        dispatch(setModalIsOpen(false))
    }
    if (!modalIsOpen) {
        return (null)
    }
    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                    <Flex align={"center"} justify={"space-between"}>
                        <Title color={"white"}>
                            {title}
                        </Title>
                        <CloseIcon onClick={handleClose}>
                            X
                        </CloseIcon>
                    </Flex>
                </ModalHeader>
                <ModalBody>
                    <Flex>
                        {children}
                    </Flex>
                </ModalBody>
            </ModalContainer>
        </ModalOverlay>
    );

};
const ModalOverlay = styled.div`
width: 100vw;
height: 100vh;
position:absolute;
top: 0;
z-index: 1000;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.7);
`

const ModalContainer = styled.div`
width: 50%;
min-width: 200px;
background-color: white;
border-radius: 20px;
@media(max-width: 768px){
width: 75%;
}
`;
const ModalHeader = styled.div`
background-color: #cad1c4;
padding: 10px 20px 10px 20px;
border-radius: 20px;
`
const ModalBody = styled.div`
padding: 20px;

`
const CloseIcon = styled.div`
font-weight: 800;
color:grey;
cursor: pointer;
`
const ModalFooter = styled.div``


export default Modal;