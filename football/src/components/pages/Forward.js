import React from 'react';
import {Footballers} from '../../dataset/data'


export default function Forward(){

    return(
        <>
            <div className="player-container">
                {Footballers.map((data) => {
                return (
                        <div key={data.ID}>
                            {
                                (
                                    data.Position == "LS" || 
                                    data.Position == "ST" || 
                                    data.Position == "RS" || 
                                    data.Position == "LW" ||
                                    data.Position == "LF" || 
                                    data.Position == "CF" || 
                                    data.Position == "RF" || 
                                    data.Position == "RW" 
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