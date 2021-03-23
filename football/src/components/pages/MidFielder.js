import React from 'react';
import {Footballers} from '../../dataset/data'


export default function MidFielder(){

    return(
        <>
            <div className="player-container">
                {Footballers.map((data) => {
                return (
                        <div key={data.ID}>
                            {
                                (
                                    data.Position === "LAM" || 
                                    data.Position === "CAM" || 
                                    data.Position === "RAM" || 
                                    data.Position === "LM" ||
                                    data.Position === "LCM" || 
                                    data.Position === "CM" || 
                                    data.Position === "RCM" || 
                                    data.Position === "RM" 
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