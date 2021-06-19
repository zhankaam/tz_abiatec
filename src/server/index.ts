import axios from "axios";
import {GetResponseType} from "./types";

const instance = axios.create({
    baseURL: process.env.REACT_APP_THE_RICK_AND_MORTY_BASE_URL
});

const getQuery = (name: string = '', page: number = 1) => (
    `?page=${page}&name=${name}`
)

export const getCharacters = (name = '') => instance
    .get<GetResponseType>(getQuery(name))

export const getCharactersByClick = (click:string) => axios.get(click)


