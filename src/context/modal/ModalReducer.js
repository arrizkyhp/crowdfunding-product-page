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