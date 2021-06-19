import {Header} from "./Header";
import {ContentList} from "./ContentList";
import {useFetchContent} from "../hooks/useFetchContent";
import "./App.css";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {toggleIsFetchingAC} from "../redux-store/app-reducer";
import {FetchMoreButton} from "./Button/fetchMoreButton";
import {useTypedSelector} from "../redux-store";

const App = () => {
    const [fetch, content, fetchMore] = useFetchContent();
    const [isDataLoaded, setIsDataLoaded] = useState(true);

    const characters = useTypedSelector(state => state.app.characters);
    const totalPage = useTypedSelector(state => state.app.totalPage);
    const nextPage = useTypedSelector(state => state.app.nextPage);
    const isFetching = useTypedSelector(state => state.app.isFetching);
    const error = useTypedSelector(state => state.app.error);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isDataLoaded) {
            fetch();
            setIsDataLoaded(false);
        }
    }, [isDataLoaded,fetch]);

    const fetchMoreHandler = () => {
        let finalList = characters ? characters : content;
        fetchMore(finalList, totalPage, nextPage);
    };

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (characters.length !== 0 && totalPage.length !== 0) {
        if (!nextPage && characters[characters.length - 1].id === totalPage[totalPage.length - 1].id) {
            dispatch(toggleIsFetchingAC(false));
        }
    } else if (characters.length === 0) {
        dispatch(toggleIsFetchingAC(false));
    } else {
        dispatch(toggleIsFetchingAC(true));
    }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return (
        <div className="App">
            <Header onSearch={fetch}/>
            <h1>Simple content list</h1>
            <h2>{error}</h2>
            <ContentList content={characters ? characters : content}/>
            {isFetching && <FetchMoreButton onClick={fetchMoreHandler}/>}
        </div>
    );
};

export default App;
