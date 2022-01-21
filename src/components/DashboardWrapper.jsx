import React from 'react';
import {useSelector} from "react-redux";
import styled from "styled-components";
import SideBar from "./SideBar";
import Flex from "./Flex";
import Header from "./Header";
import Modal from "./Modal"
import Form from "./Form";
import Hamburger from "./Hamburger";
const DashboardWrapper = ({children}) => {
    const {editableUserData} = useSelector(state => state.users)
    const {navIsOpen} = useSelector(state => state.modals)
    return (
        <DashboardWrapperContainer>
            <Flexible>
                <Header>
                    <Hamburger/>
                    </Header>
                <LeftCol>
                    <SideBar navIsOpen={navIsOpen}/>
                </LeftCol>
                <RightCol>
                    {children}
                </RightCol>
            </Flexible>
            <Modal title={editableUserData ? "Edit User":"Add User"}>
                <Form/>
            </Modal>
        </DashboardWrapperContainer>
    );
};
const DashboardWrapperContainer=styled.div`
height: 100vh;
border-radius: 50px;
display: flex;
overflow-x: hidden;
@media (max-width: 768px){
flex-direction: column;
width: 100%;
}
`
const Flexible=styled(Flex)`
@media (max-width: 768px){
flex-direction: column;
}
`
const LeftCol = styled.div`
width: 20vw;
@media (max-width: 768px){
width: 100vw;
}
`
const RightCol = styled.div`
display: flex;
width:80vw;
height: 75vh;
flex-wrap: wrap;
padding: 4rem 2rem 4rem 2rem;
@media (max-width: 768px){
width: 100vw;
padding:0.5rem;
padding-top:2.5rem;
}
`
export default DashboardWrapper;