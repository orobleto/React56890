import React from "react";

function SubTitulo() {
    return(
        <h2>Sub Titulo</h2>
    );
}

const Parrafo = () => <p>Esto es un parrafo</p>

function Titulo(props) {
const VERSION = '2.0';

    return(
    <div>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
        <h3>{props.parrafo}</h3>
    </div>
    );
}

export default Titulo;


