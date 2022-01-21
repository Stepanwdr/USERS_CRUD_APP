import React from 'react';
import styled from "styled-components"
import Flex from "./Flex";
import {Link} from "react-router-dom";
import {MdOutlineDashboard} from "react-icons/md";
import { FiUsers,FiSettings} from "react-icons/fi";
import { RiUserSettingsLine} from "react-icons/ri";
import {primaryColor} from "../utils";
const NavBar = () => {
    return (
        < NavBarContainer>
            <Flex direction={"column"}>
                <NavMenu>
                    <NavMenuLink to={'/'}>
                        <MdOutlineDashboard/>
                        <span>Dashboard</span>
                    </NavMenuLink>
                    <NavMenuLink to={'/'}>
                        <FiUsers/>
                        <span>Users</span>
                    </NavMenuLink>
                    <NavMenuLink to={'/'}>
                        <FiSettings/>
                        <span>Settings</span>
                    </NavMenuLink>
                    <NavMenuLink to={'/'}>
                        <RiUserSettingsLine/>
                        <span>Profile</span>
                    </NavMenuLink>
                </NavMenu>
            </Flex>
        </ NavBarContainer>
    );
};
const NavBarContainer = styled.div`


`
const NavMenu = styled.div`
display: flex;
flex-direction:column;
width:100%;
`
const NavMenuLink = styled(Link)`
padding: 1rem;
border-radius: 0 1.5rem 1.5rem 0;
box-shadow:-15px 0px 13px 1px rgba(0,0,0,0.2) ;
display: flex;
width: 85%;
text-decoration:none;
margin-top: 1rem;
align-items: center;
color:${primaryColor};
span{
font-weight: 500;
margin-left: 10px;
}
@media(max-width: 768px){
margin-left: 2px;
padding: 0.8rem;
}
`

export default NavBar;