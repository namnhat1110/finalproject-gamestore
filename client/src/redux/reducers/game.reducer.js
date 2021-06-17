import * as types from "../constants/game.constants";

const initialState = {
    games: [],
    loading: false,

};

const gameReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_REQUEST:
            return { ...state, loading: true }
        case types.GET_SUCCESS:
            return { ...state, games: payload }
        case types.GET_FAILURE:
            return { ...state, loading: false };

        case types.GET_SINGLE_REQUEST:
            return { ...state, loading: true }
        case types.GET_SINGLE_SUCCESS:
            return { ...state, games: payload }
        case types.GET_SINGLE_FAILURE:
            return { ...state, loading: false };


        case types.CREATE_REQUEST:
            return { ...state, loading: true };
        case types.CREATE_SUCCESS:
            return { ...state, loading: false, createdMovie: payload, };
        case types.CREATE_FAILURE:
            return { ...state, loading: false };

        case types.UPDATE_REQUEST:
            return { ...state, loading: true };
        case types.UPDATE_SUCCESS:
            return { ...state, loading: false, updatedMovie: payload };
        case types.UPDATE_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }

};

export default gameReducer;