import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {

  console.log(prod);  

  const onAdd = (cant) => {
    console.log(cant)
}

  return (
    <div className='col-md-3 p-3' key={prod.id}>                        
        
        <div className="card w-10 mt-3">
        <img className="card-img-top" rounded src={prod.foto} alt="Card image cap" display="block" max-width="100%" height="auto"/>
            <div className="card-header">
                {`${prod.name} - ${prod.category}`}
            </div>
            <div className="card-body">                                                            
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexShrink: '3', justifyContent: 'space-between'}}>
                    <h3>${prod.price}</h3>
            <ItemCount initial = {1} stock={10} onAdd={onAdd} /> 
            </div>
            </div>
            <div className="card-footer">
                <Link to={`/product/${prod.id}`}>
                <button className="btn btn-outline-primary btn-block">
                    product details
                </button> </Link>              
            </div>
        </div>
    </div>
  )
}

export default Item