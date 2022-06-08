import useState from "react";

const ItemCount = ( props ) => {

  const [contador, setContador] = useState(0);

  
  const incrementar = () => {

    if(contador < props.stock)
    setContador(contador + 1);

  };

  const decrementar = () => {

    if(contador > 0)
    setContador(contador - 1);

  }



  return (

    <div className="container my-5">

      <h2>Pizza napolitana</h2>

      <hr />

      <div class="btn-group" role="group" aria-label="Basic example">

        <button type="button" className="btn btn-success" onClick={incrementar}>
          +
        </button>

      <button type="button" className="btn btn-danger" onClick={decrementar}>
        -
      </button>
      </div>
      <hr />

      <h4>{contador}</h4>

    </div>

  );

};


export default ItemCount