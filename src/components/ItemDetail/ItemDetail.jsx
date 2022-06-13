import { Link } from 'react-router-dom';

const ItemDetail = ({prod}) => {
    return (
        <>
        <Link to={`/`}>
                <button className="btn btn-outline-primary btn-block">
                    back to products
                </button> </Link>  
        <div className='col-md-20 p-5' key={prod.id}>                        
        
        <div className="card w-10 mt-3">
        <img className="card-img-top" rounded src={`prod.foto`}  display="block" max-width="100%" height="auto"/>
            <div className="card-header">
                {`${prod.name} -                 
                Category: ${prod.category}`}
            </div>
            <div className="card-body">                                                            
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', flexShrink: '3', justifyContent: 'space-between'}}>
                    <h3>${prod.price}</h3>
                    <h2>Product Description</h2>
                    <p>{prod.description}</p>
            </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                    Add to Cart
                </button>            
            </div>
        </div>
    </div>
    </>
    )
}

export default ItemDetail
