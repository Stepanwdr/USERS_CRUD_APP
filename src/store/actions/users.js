export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_USER_EDIT_MODE = "SET_USER_EDIT_MODE";
export const UPDATE_USER="UPDATE_USER";
export const SEARCH_USER="SEARCH_USER";
export function createUser(userData) {
    return {
        type: CREATE_USER,
        payload: {
            userData
        }
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: {
            id
        }
    }
}
export function searchUser(searchValue) {
    return {
        type: SEARCH_USER,
        payload: {
            searchValue
        }
    }
}
export function updateUser(userData) {
    return {
        type: UPDATE_USER,
        payload: {
            userData
        }
    }
}

export function setUserEditMode(id) {
    return {
        type: SET_USER_EDIT_MODE,
        payload: {
           id
        }
    }
}