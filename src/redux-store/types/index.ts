import {
    fetchCharactersAC, fetchMoreCharactersAC, initialState,
    removeCharactersAC,
    setAppErrorAC,
    setNextPageAC,
    setTotalPageAC,
    toggleIsFetchingAC
} from "../app-reducer";

export type AppActionTypes =
    | ReturnType<typeof fetchCharactersAC>
    | ReturnType<typeof fetchMoreCharactersAC>
    | ReturnType<typeof removeCharactersAC>
    | ReturnType<typeof setTotalPageAC>
    | ReturnType<typeof setNextPageAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setAppErrorAC>

export type InitialStateType = typeof initialState