import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ExerciseList from './Components/exercisesList.component';
import EditExercises from './Components/EditExercises.component';
import CreateE from './Components/CreateE.component';
import CreateU from './Components/CreateU.component';
import Navbar from './Components/Navbar.component';

function App() {
  return (
    <Router>
      
      <div className='container'>

      <Navbar/>
     
      <Routes>
        <Route path='/' Component={ExerciseList}/>
        <Route path='/edit/:id' Component={EditExercises}/>
        <Route path='/Create' Component={CreateE}/>
        <Route path='/user' Component={CreateU}/>
      </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
