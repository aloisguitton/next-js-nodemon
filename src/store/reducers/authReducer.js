const initialState = { user: {} }

function auth(state = initialState, action) {
    switch (action.type) {
        case 'CONNECT':
            return {
                user: action.value['user_id'],
                token: action.value['token'],
                loggedIn: true,
            };
        case 'DISCONNECT':
            return {
                loggedIn: false,
                user: null,
                token: null,
            };
        default:
            return state
    }
}

export default auth