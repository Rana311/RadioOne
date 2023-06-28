import logo from './logo.svg';
import './App.css';
import Ten from './Ten';
import React from 'react';
import { Switch , Route} from 'react-router-dom';
import Courses from './Courses';
import Hiring from './Hiring';
import Signup from './Signup';
import Player from './Player';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Ten}/>
      <Route path='/courses' component={Courses}/>
      <Route path='/hiring' component={Hiring}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/home' component={Ten}/>
      <Route path='/player' component={Player}/>
    </Switch>
    
    </>
  );
}

export default App;
