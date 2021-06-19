import React from "react";
import {IContentList} from "./types";

export const ContentList: React.FC<IContentList> = ({content}) => {

    const renderItem = () => (
        content.map(({id, image, name, species, location}) =>
            <li key={id}>
                <img
                    width={200}
                    src={image}
                    alt={name}
                />
                <div>
                    <b>Name:</b>
                    {name} ({species})
                </div>
                <div>
                    <b>Location: </b>
                    {location.name}
                </div>
            </li>)
    )

    return (
        <ul>
            {renderItem()}
        </ul>
    );
};


