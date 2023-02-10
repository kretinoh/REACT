//import './App.css';
import React, {useState} from "react";

function App() {
    const ciudades = ['Córdoba','Sevilla','Cadiz','Málaga','Almería','Jaén','Huelva','Almería']
    const [filter,setFilter] = useState('');
    return (
        <div className="App">
            <p>Filtrado:&nbsp;
                <input id="filtro" name="filtro" type="text"
                       value={filter} onChange={e => setFilter(e.target.value)}
                />
            </p>
            <ul>
                {ciudades.filter(ciudad => ciudad.toLowerCase().includes(filter.toLowerCase()) || filter === "")
                    .map((ciudad,index = 0) => <li key={++index} >{ciudad}</li>)}
            </ul>

            <div>
                <h2>Como he arreglado el error en la consola</h2>
                <p>
                    Al leer el mensaje de error nos indicaba que todos los hijos de la lista debían de tener una 'key'.
                </p>
                <p>
                    Le he agregado al elemento li una 'key' con un valor que le paso en la arrow function y así conseguí arreglarlo
                </p>
                <h2>Como he hecho que el filtro se case-insensitive</h2>
                <p>
                    Para hacer el filtro case-insensitive he utilizado el método toLowerCase() para que todo lo que se escriba en el input se convierta a minúsculas y así poder compararlo con el array de ciudades.
                </p>
            </div>
        </div>
    );
}

export default App;
