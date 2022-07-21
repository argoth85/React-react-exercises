import React from "react";

export function Sum ({numbers = [3,6,12,56,78,90]}){

    return(
        <div>
            <h1>The total is: {numbers.reduce((number, sum) => sum + number ,0)}</h1>
        </div>
    )
}