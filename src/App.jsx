import React from 'react';
import './App.css';
import Food from './components/Food';
import Drinks from './components/Drinks';
import Help from './components/Help';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Navigation from './components/NavBar/Navigation';
import { Route, Routes} from 'react-router-dom';


function App() {
  return (        
    <div className="App">
          <Navigation/>            
          <Routes>                
             <Route path='/Food' element={<Food/>}/>  
             <Route path='/Drinks' element={<Drinks/>}/>               
             <Route path='/Help' element={<Help/>}/> 
             <Route path='/AboutUs' element={<AboutUs/>}/>  
             <Route path='/' element={<Home/>}/>            
          </Routes>
    </div>
  );
}

export default App;