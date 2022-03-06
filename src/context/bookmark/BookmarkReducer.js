const bookmarkReducer = (state, action) => {
    switch(action.type) {
        case 'INIT_BOOKMARK':
            return {
                ...state,
                bookmark: false
            }
        case 'SWITCH_BOOKMARK':
            return {
                ...state,
                bookmark: !state.bookmark
            }
        default:
            return state
    }
}

export default bookmarkReducer