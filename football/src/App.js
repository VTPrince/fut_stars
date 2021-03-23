import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Forward from './components/pages/Forward';
import MidFielder from './components/pages/MidFielder';
import Defender from './components/pages/Defender';
import GoalKeeper from './components/pages/GoalKeeper';
import Comparison from './components/pages/Comparison';
import Wishlist from './components/pages/Wishlist';
import AboutUs from './components/pages/AboutUs';
import Logout from './components/pages/Logout';
import Players from './components/pages/Players';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Forward' exact component={Forward} />
        <Route path='/MidFielder' exact component={MidFielder} />
        <Route path='/Defender' exact component={Defender} />
        <Route path='/GoalKeeper' exact component={GoalKeeper} />
        <Route path='/Comparison' exact component={Comparison} />
        <Route path='/Wishlist' exact component={Wishlist} />
        <Route path='/AboutUs' exact component={AboutUs} />
        <Route path='/Logout' exact component={Logout} />
        <Route path='/Players' exact component={Players} />
      </Switch>
    </Router>
  );
}

export default App;

