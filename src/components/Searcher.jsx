import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {searchUser} from "../store/actions/users";


const Searcher = () => {
    const {users,searchValue}=useSelector(state=>state.users)
    const dispatch=useDispatch()
    const handleSearch=(ev)=>{
     dispatch(searchUser(ev.target.value))
    }
    return (
        <SearchForm >
            <Input type={"text"}
                   placeholder={"Search user by name,phone or email"}
                   onChange={handleSearch}
                   value={searchValue}
            />
        </SearchForm>
    );
};
const SearchForm = styled.form`
width:250px;
`
const Input = styled.input`
padding:0.5rem;
border-radius: 0.5rem;
color: grey;
border: none;
outline: none;
background-color: bisque;
margin-top: 5px;
width: 100%;
`
export default Searcher;