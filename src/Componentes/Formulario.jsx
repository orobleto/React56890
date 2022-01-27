import React, { Component } from "react";



export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            clave: ""
        }

    }

    EnviarFormulario = (e) => {
        e.preventDefault();

        // voy a llamar a mi api enviar la informacion

        this.LimpiarFormulario();
    }

    LimpiarFormulario = () => {
        this.setState({
            usuario: "",
            clave: ""
        });
    }
    AsignarEstados = (evento) => {
        this.setState({
            [evento.target.name]: evento.target.value
        });
    }

    render() {
        return (
            <div>
                <form id="fomrulario" onSubmit={this.EnviarFormulario}>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        required={true}
                        value={this.state.usuario} // usuario = valor del input
                        onChange={this.AsignarEstados}

                    />
                    <br />    <br />
                    <input
                        type="password"
                        id="clave"
                        name="clave"
                        required={true}
                        value={this.state.clave}
                        onChange={this.AsignarEstados}

                    />
                    <br />    <br />
                    <button type="submit">Enviar</button>
                    <button type="reset" onClick={this.LimpiarFormulario}>Cancelar</button>


                </form>


            </div>

        );
    }

}