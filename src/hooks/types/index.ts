import {CharactersResType} from "../../server/types";

export type IData = [
    (value?: string) => void,
    CharactersResType[],
    (imgList: CharactersResType[],
     totalPages: CharactersResType[],
     nextPage: string) => void
]