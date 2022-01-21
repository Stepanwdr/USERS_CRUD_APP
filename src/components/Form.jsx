import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import Flex from "./Flex";
import Button from "./Button";
import {setModalIsOpen} from "../store/actions/modals";
import {createUser, updateUser} from "../store/actions/users";
const Form = () => {
    const {editableUserData} = useSelector(state => state.users)
    const [userData, setUserData] = useState({})
    const dispatch = useDispatch()
    const [error, setError] = useState({message: ""})
    const handleChange = (ev, field) => {
        setUserData({...userData, [field]: ev.target.value})
    }
    const handleSubmit = (ev) => {
        ev.preventDefault()
        const isFiledCompleted = userData.name && userData.surname && userData.phone && userData.email
        if (isFiledCompleted) {
            if (editableUserData) {
                dispatch(updateUser(userData))
            } else {
                dispatch(createUser(userData))
            }
            dispatch(setModalIsOpen(false))
        } else {

            setError({message: `Please Complete all inputs`})
        }
    }
    useEffect(() => {
        if (editableUserData) {
            setUserData(editableUserData)
        }
    }, [])

    return (
        <FormContainer>
            <Flex direction={"column"} justify={"space-between"} align={"center"}>
                <Flex direction={"column"}>
                    {error.message && <ErrorMessage>
                        {error.message}
                    </ErrorMessage>}
                    <Label>
                        Name
                    </Label>
                    <Input placeholder={"Name"}
                           onChange={(ev) => handleChange(ev, "name")}
                           value={userData.name}
                           type={"text"}
                    />
                </Flex>
                <Flex direction={"column"}>
                    <Label>
                        Surname
                    </Label>
                    <Input placeholder={"Surname"}
                           onChange={(ev) => handleChange(ev, "surname")}
                           value={userData.surname}
                           type={"text"}
                    />
                </Flex>
                <Flex direction={"column"}>
                    <Label>
                        Phone
                    </Label>
                    <Input placeholder={"Phone"}
                           onChange={(ev) => handleChange(ev, "phone")}
                           type={"tel"}
                           value={userData.phone}
                    />
                </Flex>
                <Flex direction={"column"}>
                    <Label>
                        Email
                    </Label>
                    <Input placeholder={"Email"}
                           onChange={(ev) => handleChange(ev, "email")}
                           type={"email"}
                           value={userData.email}
                    />
                </Flex>
                <Button primary type={"submit"} onClick={handleSubmit}>Save User</Button>
            </Flex>
        </FormContainer>
    );
};
const FormContainer = styled.form`
@media(max-width: 768px){
width: 100%;
}
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
&:last-child{
margin-bottom: 15px;
}
`
const Label = styled.div`
margin-top: 5px;
`
const ErrorMessage = styled.div`
color: crimson;
`
export default Form;