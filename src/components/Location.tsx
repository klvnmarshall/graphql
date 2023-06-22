import React from "react";
import Thumbnail from "./Thumbnail";
import RemoveButton from "./RemoveButton";


// @ts-ignore
function Location({ location, onRemove }) {
    return (
        <div className="Video">
            <Thumbnail location={location} />
            <a href={location.photo}>
                <h3>{location.name}</h3>
                <p className="mt-1">{location.description}</p>
            </a>
            <RemoveButton onRemove={onRemove} />
        </div>
    );
}


export  default Location
