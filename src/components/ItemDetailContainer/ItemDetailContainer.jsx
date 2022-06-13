import React from 'react'
import { useState, useEffect } from 'react'
import { getFetchById } from '../../helpers/getFetch'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})	
  
  const { id } = useParams()

  useEffect(() => { 
    getFetchById(id)
        .then((resp) => setProducto(resp))
        .catch(err => console.log(err))
    }, [])

  return <ItemDetail prod={producto} />

}

export default ItemDetailContainer