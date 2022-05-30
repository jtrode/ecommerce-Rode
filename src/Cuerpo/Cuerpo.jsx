export default function Cuerpo(){
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://es.wikipedia.org/wiki/React#/media/Archivo:React.svg'/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input type="mail" placeholder="ingrese el mail" onClick={ () => console.log('joaco') } />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }