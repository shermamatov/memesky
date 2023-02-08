import { Typer } from "./../reducers/memeReducer";
import { MemeAction, MemeType } from "./../../types/types";
import { API } from "./../../hooks/Perems";
import axios from "axios";
import { Dispatch } from "redux";

export const getMemeAsync = (): any => {
    return async (dispatch: Dispatch<MemeAction>) => {
        try {
            let response = await axios.get(`${API}${window.location.search}`);
            dispatch({ type: Typer.GET_MEMES, payload: response.data });
        } catch (e) {
            console.log(e);
        }
    };
};

export const addMemeAsync = (obj: MemeType): any => {
    return async (dispatch: Dispatch<MemeAction>) => {
        try {
            await axios.post(API, obj);
        } catch (e) {
            console.log(e);
        }
    };
};

export const DeleteUser = (id: number): any => {
    return async (dispatch: Dispatch<MemeAction>) => {
        try {
            await axios.delete(`${API}/${id}`);
            dispatch(getMemeAsync());
        } catch (e) {
            console.log(e);
        }
    };
};

export const getOneUser = (id: number | undefined | string): any => {
    return async (dispatch: Dispatch<MemeAction>) => {
        try {
            let response = await axios.get(`${API}/${id}`);
            console.log(response);

            dispatch({ type: Typer.GET_ONE_MEME, payload: response.data });
        } catch (e) {
            console.log(e);
        }
    };
};

export const editData = (id: string | undefined, obj: MemeType): any => {
    return async (dispatch: Dispatch<MemeAction>) => {
        try {
            await axios.patch(`${API}/${id}`, obj);
            dispatch(getMemeAsync());
        } catch (e) {
            console.log(e);
        }
    };
};
