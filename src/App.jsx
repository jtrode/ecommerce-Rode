import React from 'react';
import './App.css';
import Food from './pages/Food/Food';
import Drinks from './pages/Drinks/Drinks';
import Help from './pages/Help/Help';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, Navigate} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (        
    <div className="App">
          <NavBar/>           
          <Routes>                
             <Route path='/food' element={<Food/>}/>
             <Route path='product/:id' element={<ItemDetailContainer />} /> 
             <Route path='/drinks' element={<Drinks/>}/>               
             <Route path='/help' element={<Help/>}/> 
             <Route path='/aboutUs' element={<AboutUs/>}/>
             <Route path='/cart' element={<Cart/>}/>    
             <Route path='/' element={<Home/>}/>
             <Route path='*' element={<Navigate to ='/' />}/>            
          </Routes>
    </div>
  );
}

export default App;