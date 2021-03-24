import React from 'react';
import {Footballers} from '../../dataset/data'
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Info from './Info';
import {Link} from 'react-router-dom';

const handleClick = (e) => {
    localStorage.setItem('id', e.target.id);
  }

class Forward extends React.Component{
    
    render(){
        return (
        <>
            <div className="player-container">
                {    
                Footballers.map((data) => {
                    
                    return(
                    <>
                    {/* <Router>
                        <Switch>
                            <Route path='/Info' exact component={Info} key={data.ID} />
                        </Switch>
                    </Router> */}
                        <div key={data.ID}>
                            {
                                (
                                    data.Position === "LS" || 
                                    data.Position === "ST" || 
                                    data.Position === "RS" || 
                                    data.Position === "LW" ||
                                    data.Position === "LF" || 
                                    data.Position === "CF" || 
                                    data.Position === "RF" || 
                                    data.Position === "RW" 
                                ) && 
                                <Link to='/Info' key={data.ID}>
                                    <button key={data.ID} id={data.ID} onClick={handleClick}>{data.Name}</button>
                                 </Link>
                                // <p><button onClick={localStorage.setItem('id',data.ID)}>{data.Name}</button></p>     
                            }
                        </div>
                        </>
                );
                })}
            </div>
        </>
        )
    }
}

export default Forward;