import { MemeAction } from "./../../types/types";
import { Init, MemeType } from "../../types/types";
export enum Typer {
    GET_MEMES = "GET_MEMES",
    GET_ONE_MEME = "GET_ONE_MEME",
}
const initState: Init = {
    memes: [],
    oneMeme: {} as MemeType,
};

export const memeReducer = (state: Init = initState, action: MemeAction) => {
    switch (action.type) {
        case Typer.GET_MEMES:
            return { ...state, memes: action.payload };
        case Typer.GET_ONE_MEME:
            return { ...state, oneMeme: action.payload };
        default:
            return state;
    }
};
