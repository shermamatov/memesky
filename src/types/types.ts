import { FC, FunctionComponent } from "react";

export interface folo {
    img: string;
    id: number;
}
export interface MemeType {
    title: string;
    img: string;
    autor: string;
    id: number;
    data: string;
    type: string;
}
export interface Init {
    memes: MemeType[];
    oneMeme: MemeType;
}
export interface MemeAction {
    type: string;
    payload?: any;
}
export interface routeType {
    link: string;
    element: any;
    id: number;
}
