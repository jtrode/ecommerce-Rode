import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)
    

const { categoryId } = useParams()
console.log(categoryId);

    useEffect(()=>{
        if(categoryId){
            console.log("entro if category id no null");
            getFetch()
            .then((resp)=> {
                    setProductos(resp.filter(prod => prod.category === categoryId))
                    setLoading(false)
            })
            .catch(err => console.log(err))

        } else {


        getFetch()
        .then((resp)=> {
                setProductos(resp)
                setLoading(false)
        })
        .catch(err => console.log(err))


    }
    }, [categoryId])


return (       
	   <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :   
				<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: '10'}}> 
			    <ItemList productos = {productos}/>
				</div>             
            }
        </div>
    )
}

export default ItemListContainer