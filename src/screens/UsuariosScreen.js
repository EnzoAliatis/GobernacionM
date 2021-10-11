import React from 'react'
import { useForm } from "react-hook-form";


export const UsuariosScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='heroBackground'>
                <div className="connectividad__header_container">
                    <h3>FICHA DE DIRECCIONES TCP/IP</h3>
                    <h4>Ficha N.:#4</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="connectividad__table_container">
                        <div className="connectividad__header_table_container">
                            <h4>Departamento</h4>
                            <h4>Descripcion</h4>
                            <h4>Marca</h4>
                            <h4>Modelo</h4>
                            <h4>MAC Address</h4>
                            <h4>IP Address</h4>
                            <h4>Num.Serie</h4>
                        </div>
                        <div>
                            <div className="connectividad__table_row">
                                <input id="departamento" type="text" {...register("departamento", { required: true })} />
                                <input id="descripcion" type="text" {...register("descripcion", { required: true })} />
                                <input id="marca" type="text" {...register("marca", { required: true })} />
                                <input id="modelo" type="text" {...register("modelo", { required: true })} />
                                <input id="macAddress" type="text" {...register("macAddress", { required: true })} />
                                <input id="ipAddress" type="text" {...register("ipAddress", { required: true })} />
                                <input id="numSerie" type="text" {...register("numSerie", { required: true })} />
                            </div>

                            <div className="connectividad__table_submit_container">
                                <input className="primaryBtn" value="+" type="submit" />
                            </div>
                        </div>

                        <div className="connectividad__btnContainer">
                            <input className="primaryBtn" value="Guardar" type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
