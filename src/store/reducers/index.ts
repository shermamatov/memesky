import { combineReducers } from "redux";
import { store } from "..";
import { memeReducer } from "./memeReducer";

export const rootReduser = combineReducers({
    meme: memeReducer,
});
export type RootState = ReturnType<typeof rootReduser>;
export type AppDispatch = typeof store.dispatch;
