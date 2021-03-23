import React from 'react';
import {Footballers} from '../../dataset/data'


export default function Defender(){

    return(
        <>
            <div className="player-container">
                {Footballers.map((data) => {
                return (
                        <div key={data.ID}>
                            {
                                (
                                    data.Position === "LWB" || 
                                    data.Position === "LDM" ||
                                    data.Position === "CDM" || 
                                    data.Position === "RDM" || 
                                    data.Position === "RWB" || 
                                    data.Position === "LB" ||
                                    data.Position === "LCB" || 
                                    data.Position === "CB" || 
                                    data.Position === "RCB" || 
                                    data.Position === "RB" 
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