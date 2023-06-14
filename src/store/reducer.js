const initialState = {
    user_token: '',
    user_refreshToken: '',
    user_isLoggedIn: false,

};

const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                user_token: action.payload.token,
                user_refreshToken: action.payload.refreshToken,
            };
        case "RESET_TOKEN":
            return {
                ...state,
                user_token: '',
                user_refreshToken: '',
                user_isLoggedIn: false,
            };
        case "SET_ISLOGGEDIN":
            return {
                ...state,
                user_isLoggedIn: action.payload
            };
        default:
            return state;
    }
};

export { initialState, AppReducer };