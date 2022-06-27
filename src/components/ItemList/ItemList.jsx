import Item from '../Item/Item'

const ItemList = ({productos}) => {
    console.log("entro a itemlist");
    return(
    productos.map(prod => <Item key = {prod.id} prod= {prod} />)
    )
}

export default ItemList