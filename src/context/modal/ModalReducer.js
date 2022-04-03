const modalReducer = (state, action) => {
    switch(action.type) {
        case 'INIT_BOOKMARK':
            return {
                ...state,
                modal: false,
                modal_success: false
            }
        case 'SWITCH_MODAL':
            return {
                ...state,
                modal: !state.modal,
                modal_success: false
            }
        case 'SWITCH_SUCCESS_MODAL':
            return {
                ...state,
                modal_success: !state.modal_success,
                // modal: !state.modal
            }
        case 'SELECT_RADIO':
            return {
                ...state,
                rewardSelected: action.payload
            }
        case 'SELECT_REWARD':
            return {
                ...state,
                modal:!state.modal,
                rewardSelected: action.payload
            }
        default:
            return state
    }
}

export default modalReducer