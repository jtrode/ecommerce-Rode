
let productos = [
   { id: '1' ,category: 'food', name: "NapSalmon Caviar (Salmon Roe)", price: 300, description: loremIpsum(100),  foto:'/images/Caviar-thumbnail.jpg' },
   { id: '2' ,category: 'food', name: "Sevruga Caviar", price: 280, description: loremIpsum(120), foto:'/images/images.jpg' },
   { id: '3' ,category: 'food', name: "Hackleback Caviar", price: 600, description: loremIpsum(140), foto:'/images/images (1).jpg' },
   { id: '4' ,category: 'food', name: "Peperoni Pizza", price: 80, description: loremIpsum(150), foto: '/images/pepperoni-pizza-abob-m.jpg'},
   { id: '5' ,category: 'drinks', name: "Classic Martini", price: 70, description: loremIpsum(110), foto:'/images/download3.jpg' },
   { id: '6' ,category: 'drinks', name: "Diva Vodka", price: 1000000, description: loremIpsum(110), foto:'/images/s756406745151133018_p3_i1_w1584.jpeg' },
   { id: '7' ,category: 'drinks', name: "Corona", price: 50, description: loremIpsum(120), foto: '/images/01.png6e775e92-45c1-41be-b674-0944373eaa69Large.jpg'}  
 ];

 //generate lorem ipsum text
    function loremIpsum(n) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

export const getFetch = () =>{    
   // acciones
   return new Promise( (resolve, reject)=>{   
       setTimeout(()=>{
           resolve(productos)   
       },3000)       
   })
}  

export const getFetchById = (id) =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },3000)
    })
}

