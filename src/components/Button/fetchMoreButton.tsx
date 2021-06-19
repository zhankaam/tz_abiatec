import React, {MouseEventHandler} from "react";
import {Button} from "./index";
import "./index.css";

type PropsType = {
    onClick: MouseEventHandler
}

export const FetchMoreButton: React.FC<PropsType> = ({onClick}) => {
    return (
        <div className="fetchMore" >
            <Button
                onClick={onClick}
            > Fetch More
            </Button>
        </div>
    );
};

