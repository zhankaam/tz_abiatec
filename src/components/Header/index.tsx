import React from "react";
import {SearchInput} from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./index.css";
import {IHeader} from "./types";

export const Header: React.FC<IHeader> = ({onSearch}) => (
    <header className="Header">
        <img
            src={logo}
            className="Header-logo"
            alt="logo"/>
        <SearchInput onSearch={onSearch}/>
    </header>
);

