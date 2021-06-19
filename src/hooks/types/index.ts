import {CharactersResType} from "../../server/types";

export type IFetchHook = [
    (value?: string) => void,
    CharactersResType[],
    (imgList: CharactersResType[],
     totalPages: CharactersResType[],
     nextPage: string) => void
]