import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import { getCharacters, getCharactersByClick} from "../server";
import {
    fetchCharactersAC,
    removeCharactersAC, setAppErrorAC,
    setNextPageAC,
    setTotalPageAC,
    toggleIsFetchingAC
} from "../redux-store/app-reducer";
import {IData} from "./types";
import {CharactersResType} from "../server/types";


export const useFetchContent = (): IData => {
    const [imgList, setImgList] = useState<CharactersResType[]>([]);
    const dispatch = useDispatch();

    const fetch = useCallback((value?: string) => {
        try {
            getCharacters(value)
                .then((res) => {
                    if (res.data) {
                        const results = res.data.results;
                        setImgList(results.slice(0, 10));

                        dispatch(removeCharactersAC());
                        dispatch(fetchCharactersAC(results.slice(0, 10)));
                        dispatch(setTotalPageAC(results));
                        dispatch(setNextPageAC(res.data.info.next));

                        if (results.length > 10) {
                            dispatch(toggleIsFetchingAC(true));
                        }
                    }
                });
        } catch (err) {
            dispatch(removeCharactersAC());
            dispatch(setAppErrorAC(err.response.data.error));
            dispatch(toggleIsFetchingAC(false));
        }
    }, [dispatch]);


    const fetchMore = useCallback((
        imgList: CharactersResType[],
        totalPages: CharactersResType[],
        nextPage: string) => {

        const condition = imgList[imgList.length - 1].id !== totalPages[totalPages.length - 1].id

        if (condition) {
            dispatch(fetchCharactersAC(totalPages.slice(10)));
        } else {
            getCharactersByClick(nextPage)
                .then((res) => {
                    if (res.data) {
                        const results = res.data.results;
                        dispatch(setTotalPageAC(results));
                        dispatch(fetchCharactersAC(results.slice(0, 10)));
                        dispatch(setNextPageAC(res.data.info.next));
                    }
                });

        }
    }, [dispatch]);


    return [fetch, imgList, fetchMore];
};
