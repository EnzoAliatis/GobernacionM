import React from 'react'
import { useForm, useFieldArray } from "react-hook-form";


export const UsuariosScreen = () => {
    const { control, register, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "usuarios",
    });

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
                            {fields.map((field, index) => (
                                <div className="connectividad__table_row" key={field.id}>
                                    <input {...register(`usuarios.${index}.departamento`)} />
                                    <input {...register(`usuarios.${index}.descripcion`)} />
                                    <input {...register(`usuarios.${index}.marca`)} />
                                    <input {...register(`usuarios.${index}.modelo`)} />
                                    <input {...register(`usuarios.${index}.macAddress`)} />
                                    <input {...register(`usuarios.${index}.ipAddress`)} />
                                    <input {...register(`usuarios.${index}.numSerie`)} />
                                </div>
                            ))}

                            <div className="connectividad__table_submit_container">
                                <button onClick={() => append({
                                    departamento: '',
                                    descripcion: '',
                                    marca: '',
                                    modelo: '',
                                    macAddress: '',
                                    ipAddress: '',
                                    numSerie: '',
                                })} className='primaryBtn'>
                                    +
                                </button>
                                <button onClick={() => remove(fields.length - 1)} className='dangerBtn'>
                                    -
                                </button>
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
