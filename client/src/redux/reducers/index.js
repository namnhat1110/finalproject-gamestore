import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import gameReducer from "./game.reducer";

export default combineReducers({
    auth: authReducer,
    game: gameReducer,
});