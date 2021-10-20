import React from 'react'
import { useForm, useFieldArray } from "react-hook-form";


export const ConectividadScreen = () => {
    const { control, register, handleSubmit } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "componentes",
    });

    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='heroBackground'>
                <div className="connectividad__header_container">
                    <h3>FICHA TECNICA DE COMPONENTES DE RED</h3>
                    <h4>Ficha N.:#2</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="connectividad__table_container">
                        <div className="connectividad__header_table_container">
                            <h4>Departamento</h4>
                            <h4>Codigo</h4>
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
                                    <input {...register(`componentes.${index}.departamento`)} />
                                    <input {...register(`componentes.${index}.codigo`)} />
                                    <input {...register(`componentes.${index}.descripcion`)} />
                                    <input {...register(`componentes.${index}.marca`)} />
                                    <input {...register(`componentes.${index}.modelo`)} />
                                    <input {...register(`componentes.${index}.macAddress`)} />
                                    <input {...register(`componentes.${index}.ipAddress`)} />
                                    <input {...register(`componentes.${index}.numSerie`)} />
                                </div>
                            ))}


                            <div className="connectividad__table_submit_container">
                                <button onClick={() => append({
                                    departamento: '',
                                    codigo: '',
                                    descripcion: '',
                                    marca: '',
                                    modelo: '',
                                    macAddress: '',
                                    ipAddress: '',
                                    numSerie: '',
                                })} className='primaryBtn'>
                                    +
                                </button>
                                <button onClick={() => remove(fields.length-1)} className='dangerBtn'>
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="connectividad__observaciones_container">
                            <h4>Observaciones:</h4>
                            <div className='connectividad__textarea_container'>
                                <textarea placeholder="Anadir observacion..."></textarea>
                            </div>
                        </div>
                        <div className="connectividad__inputsContainer">
                            <div className='connectividad__inputContainer'>
                                <label htmlFor="user">Usuario:</label>
                                <input id="user" type="text" {...register("user", { required: true })} />
                            </div>
                            <div className='connectividad__inputContainer'>
                                <label htmlFor="tecnico">Tecnico:</label>
                                <input id="tecnico" type="text" {...register("tecnico", { required: true })} />
                            </div>
                            <div className='connectividad__inputContainer'>
                                <label htmlFor="jefeSistema">Jefe de sistema</label>
                                <input id="jefeSistema" type="text" {...register("jefeSistema", { required: true })} />
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
