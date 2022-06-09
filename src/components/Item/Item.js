import React from 'react';
import Image from 'react-bootstrap/Image'

const Item = ({prod}) => {

  console.log(prod);  

  return (
    <div className='col-md-4 p-1' key={prod.id}>                        
        
        <div className="card w-100 mt-5" >
        <img className="card-img-top" rounded src={prod.foto} alt="Card image cap" display="block" max-width="100%" height="auto"/>
            <div className="card-header">
                {`${prod.name} - ${prod.category}`}
            </div>
            <div className="card-body">
                ${prod.price}                                                            
            </div>
            <div className="card-footer">  
                <button className="btn btn-outline-primary btn-block">
                    detalle del producto
                </button>                
            </div>
        </div>
    </div>
  )
}

export default Item