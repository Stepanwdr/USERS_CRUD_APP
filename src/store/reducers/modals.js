import {
    SET_MODAL_IS_OPEN,
    SET_NAV_IS_OPEN
} from "../actions/modals";

const initialState = {
    modalIsOpen: false,
    editUserModalIsOpen: false,
    navIsOpen:false
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_MODAL_IS_OPEN: {
            const {modalIsOpen} = action.payload
            return {
                ...state,
                modalIsOpen: modalIsOpen,
            }
        }  case SET_NAV_IS_OPEN: {
            const {navIsOpen} = action.payload
            return {
                ...state,
                navIsOpen: navIsOpen,
            }
        }
        default:
            return state

    }
}