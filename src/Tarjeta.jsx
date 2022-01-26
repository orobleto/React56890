import React, { Component } from "react";
import EstiloTarjeta from './recursos/css/tarjeta.css';

const estilo1 = {
    width:"50%",
    border:"1px solid black",
    boxShadow:"0 2px 4px blueviolet"
}

const estilo2 = {
    width:"50%",
    border:"1px solid black",
    boxShadow:"0 2px 4px red"
}
export default class Tarjeta extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            descripcion: this.props.descripcion,
            correo: this.props.correo,
            usuario: this.props.usuario,
            elemento: this.props.correo,
            mostrarCorreo: true
        }
    }

    // ciclos de vida


    // constructores

    CambiarElemento = () => {

        this.setState({
            elemento: this.state.mostrarCorreo ? this.state.usuario : this.state.correo,
            mostrarCorreo: !this.state.mostrarCorreo
        });
        /*
                if (this.state.mostrarCorreo) {
                    this.setState({
        
                        elemento: this.state.usuario,
                        mostrarCorreo:false
            
                    });
                    
                }else{
                    this.setState({
        
                        elemento: this.state.correo,
                        mostrarCorreo:true
                    })
                }
        */
    }

    render() {
        return (
            <div style={    {color:"blue"}    }>
                <h1>{this.state.descripcion}</h1>
                <h2>{this.state.elemento}</h2>
                <button onClick={this.CambiarElemento}> Mostrar {this.state.mostrarCorreo ? 'Usuario' : 'Correo'} </button>
            </div>
        );
    }
}

// export default Tarjeta;