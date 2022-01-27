import React, { Component } from "react";



export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            clave: ""
        }

    }

    // api
    // json


    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        required={true}
                        value={this.state.usuario} // usuario = valor del input
                        onChange={(evento) => { this.setState({ usuario: evento.target.value }) }}

                    />
                    <br />    <br />
                    <input
                        type="password"
                        id="clave"
                        name="clave"
                        required={true}
                        value={this.state.clave}
                        onChange={(evento) => { this.setState({ clave: evento.target.value }) }}
                    />
                    <br />    <br />
                    <button>Enviar</button>
                    <button>Cancelar</button>


                </form>


            </div>

        );
    }

}