import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {AiOutlineUserDelete, AiOutlineUserAdd, AiOutlineEdit} from "react-icons/ai";
import Flex from "./Flex";
import Title from "./Title";
import Button from "./Button";
import {darkColor} from "../utils";
import {setModalIsOpen} from "../store/actions/modals";
import {setUserEditMode, deleteUser} from "../store/actions/users";
import Searcher from "./Searcher";
import MyConfirm from "./MyConfirm";

const UsersTable = () => {
    const dispatch = useDispatch()
    const {users, filteredUsers,searchValue} = useSelector(state => state.users)
    const [tableUsers, setTableUsers] = useState(users)
    const [confirmIsOpen, setConfirmIsOpen] = useState({
        isOpen: false,
        userId: null
    })
    const handleUserCreate = () => {
        dispatch(setModalIsOpen(true))
    }

    const handleUserDelete = (id) => {
        dispatch(deleteUser(id))
        setConfirmIsOpen({isOpen:false,userId:null})
    }
    const handleConfirm = (id) => {
        setConfirmIsOpen({isOpen:true,userId:id})
    }
    const handleUserEdit = (id) => {
        dispatch(setUserEditMode(id))
        dispatch(setModalIsOpen(true))
    }
    useEffect(() => {
        if (filteredUsers) {
            setTableUsers(filteredUsers)
        }
    }, [filteredUsers,users])
    return (
        <TableContainer>
            <TableHeader>
                <Flex>
                    <Searcher/>
                </Flex>
                <Flex justify={"space-between"} align={"center"}>
                    <Title>
                        Users
                    </Title>
                    <Button success={true} color={"white"} onClick={handleUserCreate} margin={"10px"}>
                        <AiOutlineUserAdd/> Add User
                    </Button>
                </Flex>
            </TableHeader>
            {tableUsers.length ? <TableEl>
                <Th>
                    Name
                </Th>
                <Th>
                    Surname
                </Th>
                <Th>
                    Phone
                </Th>
                <Th>
                    Email
                </Th>
                <Th>
                    Action
                </Th>
                <TableBody>
                    {tableUsers.map(user => (
                        <TableRow key={user.email}>
                            <TableData>
                                {user.name}
                            </TableData>
                            <TableData>
                                {user.surname}
                            </TableData>
                            <TableData>
                                {user.phone}
                            </TableData>
                            <TableData>
                                {user.email}
                            </TableData>
                            <TableData>
                                <Flex align={"center"} justify={"space-around"}>
                                    <AiOutlineEdit onClick={() => handleUserEdit(user.id)}/> | <AiOutlineUserDelete
                                    onClick={()=>handleConfirm(user.id)}/>
                                   { confirmIsOpen.userId === user.id &&
                                   <MyConfirm userId={confirmIsOpen.userId}
                                               handleUserDelete={() => handleUserDelete(user.id)}
                                               name={user.name}
                                               setConfirmIsOpen={handleConfirm}
                                    />}
                                </Flex>

                            </TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </TableEl> : <EmptyData> Data Not Found</EmptyData>}


        </TableContainer>
    );
};

const TableContainer = styled.div`
width: 92%;
border-radius: 20px;
padding: 20px;
display:flex;
flex-direction: column;
box-shadow: 0 0  1.8rem rgba(0,0,0,0.2);
@media(max-width: 768px){
width: 100%;
padding: 10px;
}@media(max-width: 428px){
overflow-x: auto;
}

`
const TableHeader = styled(Flex)`
flex-direction: column;
`


const TableEl = styled.table`
border-collapse: collapse;
width: 100%;
font-weight: 500;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
margin-top: 10px;
@media(max-width: 768px){
font-size: 14px;
}
`

const Th = styled.th`
min-width: 50px;
color: ${darkColor};
background-color: rgba(0,0,0,0.1);
padding: 5px;
text-align: left;
@media(max-width: 768px){
padding: 0;
min-width: 15px;
}
`
const TableBody = styled.tbody`

`
const TableRow = styled.tr`
border-bottom: 1px solid rgba(0,0,0,0.3);
position: relative;
&:nth-child(even){
background-color: #ebf6ff;

}
`
const TableData = styled.td`
padding: 10px;

@media(max-width: 768px){
padding: 5px;
}
`
const EmptyData = styled.div`
font-weight: bold;
width: 100%;
text-align: center;
color:#c5c3c1;
`
const Mark=styled.div`
color:grey;
`
export default UsersTable;