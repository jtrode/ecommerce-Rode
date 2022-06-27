import React from 'react'
import { useState, useEffect } from 'react'
import { getFetchById } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})	
  const [loading, setLoading] = useState(true)
  
  const { id } = useParams()

  useEffect(() => { 
    getFetchById(id)
        .then((resp) => { 
        setProducto(resp)
        setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

  return(
  <div>
      {
          loading ?
          <h1>Cargando...</h1> 
          :
          <div>
                <ItemDetail prod={producto} />
            </div>
      }
  </div>
  ) 
}

export default ItemDetailContainer