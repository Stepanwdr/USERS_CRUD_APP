export const SET_MODAL_IS_OPEN = "SET_MODAL_IS_OPEN";
export const SET_NAV_IS_OPEN="SET_NAV_IS_OPEN";
export function setModalIsOpen(modalIsOpen) {
    return {
        type: SET_MODAL_IS_OPEN,
        payload: {
            modalIsOpen
        }
    }

}

export function setNavIsOpen(navIsOpen) {
    return {
        type: SET_NAV_IS_OPEN,
        payload: {
            navIsOpen
        }
    }

}
