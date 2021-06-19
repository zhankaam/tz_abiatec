import {RootStateType} from "../../redux-store";

 const selectCharacters = (state: RootStateType) => state.app.characters;
 const selectError = (state: RootStateType) => state.app.error;
 const selectIsFetching = (state: RootStateType) => state.app.isFetching;
 const selectNextPage = (state: RootStateType) => state.app.nextPage;
 const selectTotalPage = (state: RootStateType) => state.app.totalPage;

export {
    selectCharacters,
    selectError,
    selectIsFetching,
    selectNextPage,
    selectTotalPage
}