import React from 'react';
import {Footballers} from '../../dataset/data'


export default function GoalKeeper(){

    return(
        <>
            <div className="player-container">
                {Footballers.map((data) => {
                return (
                        <div key={data.ID}>
                            {
                                (
                                    data.Position == "GK" 
                                ) && 
                                <p>{data.Name}</p>     
                            }
                        </div>
                );
                })}
            </div>
        </>
    )
}