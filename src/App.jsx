import React from 'react';
import './App.css';
import Food from './pages/Food/Food';
import Drinks from './pages/Drinks/Drinks';
import Help from './pages/Help/Help';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  let greetingsMessage = 'Say my name'


  return (        
    <div className="App">
          <NavBar/>  
          <ItemListContainer greetings = {greetingsMessage} />          
          <Routes>                
             <Route path='/Food' element={<Food/>}/>  
             <Route path='/Drinks' element={<Drinks/>}/>               
             <Route path='/Help' element={<Help/>}/> 
             <Route path='/AboutUs' element={<AboutUs/>}/>
             <Route path='/Cart' element={<Cart/>}/>    
             <Route path='/' element={<Home/>}/>            
          </Routes>
    </div>
  );
}

export default App;