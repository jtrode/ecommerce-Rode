
let productos = [
   { id: '1' ,category: 'Food', name: "NapSalmon Caviar (Salmon Roe)", price: 300, foto:"images/Caviar-thumbnail.jpg" },
   { id: '2' ,category: 'Food', name: "Sevruga Caviar", price: 280, foto:"images/images.jpg" },
   { id: '3' ,category: 'Food', name: "Hackleback Caviar", price: 600, foto:"images/images (1).jpg" },
   { id: '4' ,category: 'Food', name: "Peperoni Pizza", price: 80, foto: "images/pepperoni-pizza-abob-m.jpg"},
   { id: '5' ,category: 'Drinks', name: "Classic Martini", price: 70, foto:"images/download3.jpg" },
   { id: '6' ,category: 'Drinks', name: "Diva Vodka", price: 1000000, foto:"images/s756406745151133018_p3_i1_w1584.jpeg" },
   { id: '7' ,category: 'Drinks', name: "Corona", price: 50, foto: "images/01.png6e775e92-45c1-41be-b674-0944373eaa69Large.jpg"}  
 ];

export const getFetch = () =>{    
   // acciones
   return new Promise( (resolve, reject)=>{   
       setTimeout(()=>{
           resolve(productos)   
       },3000)    
       // reject('no qtengo nada para')    
   })
}  
