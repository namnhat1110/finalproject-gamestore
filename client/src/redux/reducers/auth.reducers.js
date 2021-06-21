import * as types from "../constants/auth.constants";

const isAuthenticated = !!localStorage.getItem("accessToken");
const gamestoreUser = JSON.parse(localStorage.getItem(' gamestoreUser'));


const initialState = {
    loading: false,
    isAuthenticated,
    accessToken: localStorage.getItem("accessToken"),
    user: {
        name: gamestoreUser ? gamestoreUser.name : "",
        email: gamestoreUser ? gamestoreUser.email : "",
        avatar: gamestoreUser ? gamestoreUser.avatar : '',
        id: gamestoreUser ? gamestoreUser._id : '',
    },
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.LOGIN_REQUEST:
        case types.REGISTER_REQUEST:
        case types.VERIFY_EMAIL_REQUEST:
        case types.GET_CURRENT_USER_REQUEST:
            return { ...state, loading: true };

        case types.REGISTER_SUCCESS:
            localStorage.setItem("accessToken", payload.accessToken)
            localStorage.setItem('gamestoreUser', JSON.stringify(payload.user));
            return {
                ...state,
                loading: false,
                isAuthenticated: true
            };

        case types.LOGIN_SUCCESS:
        case types.VERIFY_EMAIL_SUCCESS:
        case types.LOGIN_FAILURE:
        case types.VERIFY_EMAIL_FAILURE:
        case types.GET_CURRENT_USER_FAILURE:
            return { ...state, loading: false, isAuthenticated: false };


        case types.REGISTER_FAILURE:
        case types.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,
                isAuthenticated: true,
            };

        case types.LOGOUT:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('gamestoreUser');
            return {
                ...state,
                user: null,
                loading: false,
                accessToken: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
