import React from 'react';

export default function Info(){
    return(
        <>
            <h1>{localStorage.getItem("id")}</h1>
        </>
    )
}