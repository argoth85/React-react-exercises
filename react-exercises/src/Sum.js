import React from "react";

export function Sum ({numbers}){

    return(
        <div>
            <h1>The total is: {numbers.reduce((number, sum) => sum + number ,0)}</h1>
        </div>
    )
}