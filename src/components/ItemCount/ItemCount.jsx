import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    function suma() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function resta() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        onAdd(count)
    }
    
    
    return (
        <>
                    <div className="btn-group" role="group" aria-label="Basic example">

                        <button type="button" className="btn btn-success" onClick={suma}>
                        +
                        </button>

                        <button type="button" className="btn btn-danger" onClick={resta}>
                        -
                        </button>

                        <button type="button" className="btn btn-primary" onClick={agregar}>
                        Add to Cart
                        </button>
                    </div>
            <h3>{count}</h3>
        </>
    )
}

export default ItemCount
