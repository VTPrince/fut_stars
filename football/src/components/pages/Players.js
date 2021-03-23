import React from 'react';
import {Link} from 'react-router-dom';

export default function Players(){
    return(
        <>
            <h1>Players</h1>
            <ul>
                <li className='nav-item'>
                    <Link to='/Forward' className='player-links'>
                        Forward
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/MidFielder' className='player-links'>
                        MidFielder
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Defender' className='player-links'>
                        Defender
                    </Link>
                </li>
                <li className='nav-item'>
                        <Link to='/GoalKeeper' className='player-links'>
                        GoalKeeper
                    </Link>
                </li>       
            </ul>
        </>
    )
}