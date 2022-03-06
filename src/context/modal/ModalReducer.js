const modalReducer = (state, action) => {
    switch(action.type) {
        case 'INIT_BOOKMARK':
            return {
                ...state,
                modal: false
            }
        case 'SWITCH_MODAL':
            return {
                ...state,
                modal: !state.modal
            }
        default:
            return state
    }
}

export default modalReducer