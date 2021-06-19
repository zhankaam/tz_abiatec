import React from "react";
import {Button} from "./index";
import {CharactersResType} from "../../server/types";

type PropsType = {
    onClick: (
        imgList: CharactersResType[],
        totalPages: CharactersResType[],
        nextPage: string
    ) => void
}

export const FetchMoreButton: React.FC<PropsType> = ({onClick}) => {
    return (
        <div className="FetchMore">
            <Button
                onClick={onClick}
            > Fetch More
            </Button>
        </div>
    );
};

