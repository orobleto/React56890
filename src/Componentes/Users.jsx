import React, { Component } from "react";
import users from '../recursos/users.json';
import Tarjeta from "../Tarjeta";

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: users
        }

    }
    // [2,4,6] -> [4,8,12]
    // map filter reduce
    render() {
        return (
            <div>
                {
                    this.state.usuarios.map((usuario) =>
                    <div   key={usuario.id}>
                        <Tarjeta
                            correo={usuario.email}
                            descripcion={usuario.name}
                            usuario={usuario.username} />
                    </div>
                    )
                }


            </div>

        );

    }


}