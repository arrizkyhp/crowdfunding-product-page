const navbarReducer = (state, action) => {
    switch(action.type) {
        case 'INIT_MENU':
            return {
                ...state,
                menu: false
            }
        case 'SET_MENU':
            return {
                ...state,
                menu: !state.menu
            }
        default:
            return state
    }
}

export default navbarReducer