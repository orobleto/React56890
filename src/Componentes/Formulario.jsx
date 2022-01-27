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
    AsignarEstados = (atributo, valor) => { // (usuario,octavio.robleto)
        let estado = {};
        estado[atributo] = valor; // estado = { usuario:"octavio.robleto"}
        this.setState(estado);
        console.log(this.state);
    }

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
                        onChange={(e) => this.AsignarEstados(e.target.name, e.target.value)}

                    />
                    <br />    <br />
                    <input
                        type="password"
                        id="clave"
                        name="clave"
                        required={true}
                        value={this.state.clave}
                        onChange={(e) => this.AsignarEstados(e.target.name, e.target.value)}

                    />
                    <br />    <br />
                    <button>Enviar</button>
                    <button>Cancelar</button>


                </form>


            </div>

        );
    }

}