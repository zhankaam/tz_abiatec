import {ActionTypes} from './enum';
import {AppActionTypes, InitialStateType} from './types';
import {CharactersResType} from "../server/types";


export const initialState = {
    characters: [] as CharactersResType[],
    totalPage: [] as CharactersResType[],
    nextPage: "",
    isFetching: true,
    error: "",
};

export const appReducer = (
    state: InitialStateType = initialState,
    action: AppActionTypes
): InitialStateType => {
    switch (action.type) {
        case ActionTypes.FETCH_MORE_CHARACTERS:
            return {
                ...state,
                characters: [...state.characters, ...action.payload.characters]
            }
        case ActionTypes.FETCH_CHARACTERS:
        case ActionTypes.REMOVE_CHARACTERS:
        case ActionTypes.SET_TOTAL_PAGE:
        case ActionTypes.SET_NEXT_PAGE:
        case ActionTypes.TOGGLE_IS_FETCHING:
        case ActionTypes.SET_APP_ERROR:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const fetchCharactersAC = (characters: CharactersResType[]) => (
    {
        type: ActionTypes.FETCH_CHARACTERS, payload: {characters} as InitialStateType
    } as const);
export const fetchMoreCharactersAC = (characters: CharactersResType[]) => (
    {
        type: ActionTypes.FETCH_MORE_CHARACTERS, payload: {characters}
    } as const);

export const removeCharactersAC = () => (
    {
        type: ActionTypes.REMOVE_CHARACTERS, payload: {characters: [] as CharactersResType[]} as InitialStateType
    } as const);

export const setTotalPageAC = (totalPage: CharactersResType[]) => (
    {
        type: ActionTypes.SET_TOTAL_PAGE, payload: {totalPage} as InitialStateType
    } as const);

export const setNextPageAC = (nextPage: string) => (
    {
        type: ActionTypes.SET_NEXT_PAGE, payload: {nextPage} as InitialStateType
    } as const);

export const toggleIsFetchingAC = (isFetching: boolean) => (
    {
        type: ActionTypes.TOGGLE_IS_FETCHING, payload: {isFetching} as InitialStateType
    } as const);

export const setAppErrorAC = (error: string) => (
    {
        type: ActionTypes.SET_APP_ERROR, payload: {error} as InitialStateType
    } as const);

