import {
    CREATE_USER, UPDATE_USER, DELETE_USER, SET_USER_EDIT_MODE, SEARCH_USER,
} from "../actions/users";

const initialState = {
    users: [
        {id: 1, name: "John", surname: "Bryn", email: "john@gmail.com", phone: "044963696"},
        {id: 2, name: "Niko", surname: "Smith", email: "00main@gmail.com", phone: "098852147"},
        {id: 3, name: "Jack", surname: "Parker", email: "jack@gmail.com", phone: "095545445"},
        {id: 4, name: "Jery", surname: "Adams", email: "jery_ad@gmail.com", phone: "093896523"},
        {id: 5, name: "Narek", surname: "Margaryan", email: "naro@gmail.com", phone: "097357753"},
        {id: 6, name: "Ara", surname: "Syan", email: "05aro@gmail.com", phone: "097159951"},
        {id: 7, name: "Jack", surname: "Bryn", email: "08jack@gmail.com", phone: "095123654"},
        {id: 8, name: "Hovo", surname: "Vyan", email: "gmailhov_ad@gmail.com", phone: "093963258"},
    ],
    editableUserData: undefined,
    searchValue: "",
    filteredUsers: undefined,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_USER: {
            const {userData} = action.payload
            const date=new Date()
            const newUser={...userData,id:date.getMilliseconds()}
            const filteredUsers = [...state.users,newUser]
            return {
                ...state,
                users: filteredUsers,
                filteredUsers,
            }
        }
        case SET_USER_EDIT_MODE: {
            const {id} = action.payload
            const {users} = state
            const userData = users.find(user => user.id === id)
            return {
                ...state,
                editableUserData: userData,
            }
        }
        case UPDATE_USER: {
            const {userData} = action.payload
            const date=new Date()
            const updatedUserData={...userData,id:date.getMilliseconds()}
            const {users} = state
            const allUsers = users.filter(user => user.id !== userData.id)
            return {
                ...state,
                users: [...allUsers, updatedUserData],
                filteredUsers: [...allUsers, updatedUserData],
                editableUserData: undefined
            }
        }
        case SEARCH_USER: {
            const {searchValue} = action.payload
            const {users} = state
            let filtUsers = users
            let filteredUsers = []
            const getFilteredUsers = (arr, value) => {
                return arr.filter(
                    (user) => user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                        user.surname.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                        user.phone.indexOf(value) !== -1 ||
                        user.email.indexOf(value) !== -1
                )
            }
            filteredUsers = getFilteredUsers(filtUsers, searchValue)
            return {
                ...state,
                searchValue,
                filteredUsers
            }
        }
        case DELETE_USER: {
            const {id} = action.payload
            let filteredUsers = []
            filteredUsers = [...state.users.filter(user => user.id !== id)]
            return {
                ...state,
                users: filteredUsers,
                filteredUsers,
            }
        }
        default:
            return state

    }
}