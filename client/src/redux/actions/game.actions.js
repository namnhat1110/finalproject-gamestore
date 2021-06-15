import * as types from "../constants/game.constants";

import api from "../api";

const getAll = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_REQUEST });
        const { data } = await api.get("/games");
        console.log({ foo: 'bar', data })
        dispatch({ type: types.GET_SUCCESS, payload: data.data.games });
    } catch (error) {
        dispatch({ type: types.GET_FAILURE });
        console.log({ error });
    }
};

const createGame = (game) => async (dispatch) => {
    try {
        dispatch({ type: types.CREATE_START });
        const { data } = await api.post('/games', game);
        dispatch({ type: types.CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.CREATE_FAILURE });
    }
};

const updateGame = (game) => async (dispatch) => {
    try {
        dispatch({ type: types.UPDATE_START });
        const { data } = await api.patch(`/games/${game._id}`, game);
        dispatch({ type: types.UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.UPDATE_FAILURE });
    }
};

const deleteGame = (game) => async (dispatch) => {
    try {
        dispatch({ type: types.DELETE_START });
        const { data } = await api.delete(`/games/${game._id}`);
        dispatch({ type: types.DELETE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.DELETE_FAILURE })
    }
};

const gameActions = {
    getAll,
    createGame,
    updateGame,
    deleteGame
};

export { gameActions };
