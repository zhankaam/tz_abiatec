import React, {useCallback, useState} from "react";
import {Button} from "../Button";
import "./index.css";
import {useDispatch} from "react-redux";
import {setAppErrorAC} from "../../redux-store/app-reducer";
import {useTypedSelector} from "../../redux-store";
import {ISearchInput} from "./types";
import * as appSelectors from "../Selectors";

export const SearchInput: React.FC<ISearchInput> = ({onSearch}) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const {selectError} = appSelectors;
    const error = useTypedSelector(selectError);

    const onSearchChange = useCallback((e) => {
        setValue(e.target.value);
        error && dispatch(setAppErrorAC(""));
    }, [error, dispatch]);

    const onSubmit = useCallback(() => onSearch(value), [value, onSearch]);

    return (
        <div className="SearchInput">
            <input
                value={value}
                onChange={onSearchChange}
            />
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    );
};
