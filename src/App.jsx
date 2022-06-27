import React from 'react';
import './App.css';
import Help from './pages/Help/Help';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, Navigate} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartContext } from './context/cartContext';


function App() {

  return (
    <CartContext.Provider
    //value={}
    >     
    <div className="App">
          <NavBar/>           
          <Routes>                
             <Route path='/category/:categoryId' element={<ItemListContainer />}/>
             <Route path='/product/:id' element={<ItemDetailContainer />} />             
             <Route path='/help' element={<Help />}/> 
             <Route path='/aboutUs' element={<AboutUs />}/>
             <Route path='/cart' element={<Cart />}/>    
             <Route path='/' element={<Home />}/>
             <Route path='*' element={<Navigate to ='/' />}/>            
          </Routes>
    </div>
    </CartContext.Provider>   
  );
}

export default App;