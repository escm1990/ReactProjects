import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  /* 
    Estado (Hooks), es para almacenar variable y funccionalidad 
    const [variable, funcion] = useState()
  */

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeL1 = function(evento) {
    setLinea1(evento.target.value)
  }

  const onChangeL2 = function(evento) {
    setLinea2(evento.target.value)
  }

  const onChangeImg = function(evento){
    setImagen(evento.target.value)
  }

  const exportarImagen = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var link = document.createElement('a');
      link.download = "meme.jpg";
      link.href = canvas.toDataURL();
      link.click();
  });
  }

  return (
    <div className="App">

    {/* Selector de memes */}
    <select onChange={onChangeImg}>
      <option value="fire">Casa en llamas</option>
      <option value="futurama">Futurama</option>
      <option value="history">History Channel</option>
      <option value="matrix">Matrix</option>
      <option value="philosoraptor">Philosoraptor</option>
      <option value="smart">Smart Guy</option>
    </select><br/>
  
    {/* Caja de texto superior */}
    <input onChange={onChangeL1} type="text" placeholder="Linea superior"/> <br/>

    {/* Caja de texto inferior */}
    <input onChange={onChangeL2} type="text" placeholder="Linea inferior"/> <br/>

    {/* Boton para exportar el meme */}
    <button onClick={exportarImagen}>Exportar</button>

    {/* Vista previa del meme */}
    <div className="meme" id="meme">
      <span>{linea1}</span>
      <img src={"/plantillas/"+imagen+".jpg"}/>
      <span>{linea2}</span>
    </div>

    </div>
  );
}

export default App;
