import React from 'react'
import { useForm } from "react-hook-form";

export const FichaTecnicaScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className="fichaTecnica">
            <div className="fichaTecnica__formBox">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <h3 className="fichaTecnica__formTitle">Ficha Tecnica: 1</h3>
                    <div className="fichaTecnica__formContainer">
                        <div className="fichaTecnica__form_col">
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="equipo">Equipo: </label>
                                <input id="equipo" type="text" {...register("equipo", { required: true, maxLength: 80 })} />
                            </div>
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="responsable">Responsable: </label>
                                <input id="responsable" type="text" {...register("responsable", { required: true, maxLength: 80 })} />
                            </div>
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="proveedor">Proveedor: </label>
                                <input id="proveedor" type="text" {...register("proveedor", { required: true, maxLength: 80 })} />
                            </div>
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="adquisicion">Fecha de adquisicion: </label>
                                <input id="adquisicion" type="date" {...register("adquisicion", { required: true })} />
                            </div>
                        </div>

                        <div className="fichaTecnica__form_col">
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="codigo">Codigo: </label>
                                <input id="codigo" type="text" {...register("codigo", { required: true, maxLength: 80 })} />
                            </div>
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="departamento">Departamento: </label>
                                <input id="departamento" type="text" {...register("departamento", { required: true, maxLength: 80 })} />
                            </div>
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="dominio">Dominio/Grupo: </label>
                                <input id="dominio" type="text" {...register("dominio", { required: true, maxLength: 80 })} />
                            </div>
                            <div className='fichaTecnica__inputContainer'>
                                <label htmlFor="verificacion">Fecha de verificacion: </label>
                                <input id="verificacion" type="date" {...register("verificacion", { required: true })} />
                            </div>
                        </div>

                    </div>

                    <div className="fichaTecnica__formDetallesBox">
                        <div className='fichaTecnica__TableHeader'>
                            <h4>Descripcion</h4>
                            <h4>Marca</h4>
                            <h4>Modelo</h4>
                            <h4>No. de serie</h4>
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="procesadorMarca">Procesador</label>
                            <input id="procesadorMarca" type="text" {...register("procesadorMarca", { required: true })} />
                            <input id="procesadorModelo" type="text" {...register("procesadorModelo", { required: true })} />
                            <input id="procesadorSerie" type="text" {...register("procesadorSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="mainBoardMarca">MainBoard</label>
                            <input id="mainBoardMarca" type="text" {...register("mainBoardMarca", { required: true })} />
                            <input id="mainBoardModelo" type="text" {...register("mainBoardModelo", { required: true })} />
                            <input id="mainBoardSerie" type="text" {...register("mainBoardSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="memoriaMarca">Memoria</label>
                            <input id="memoriaMarca" type="text" {...register("memoriaMarca", { required: true })} />
                            <input id="memoriaModelo" type="text" {...register("memoriaModelo", { required: true })} />
                            <input id="memoriaSerie" type="text" {...register("memoriaSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="tarjetaVideoMarca">Tarjeta de Video</label>
                            <input id="tarjetaVideoMarca" type="text" {...register("tarjetaVideoMarca", { required: true })} />
                            <input id="tarjetaVideoModelo" type="text" {...register("tarjetaVideoModelo", { required: true })} />
                            <input id="tarjetaVideoSerie" type="text" {...register("tarjetaVideoSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="tarjetaRedMarca">Tarjeta de red</label>
                            <input id="tarjetaRedMarca" type="text" {...register("tarjetaRedMarca", { required: true })} />
                            <input id="tarjetaRedModelo" type="text" {...register("tarjetaRedModelo", { required: true })} />
                            <input id="tarjetaRedSerie" type="text" {...register("tarjetaRedSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="discoDuroMarca">Disco duro</label>
                            <input id="discoDuroMarca" type="text" {...register("discoDuroMarca", { required: true })} />
                            <input id="discoDuroModelo" type="text" {...register("discoDuroModelo", { required: true })} />
                            <input id="discoDuroSerie" type="text" {...register("discoDuroSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="fuentePoderMarca">Fuente de poder</label>
                            <input id="fuentePoderMarca" type="text" {...register("fuentePoderMarca", { required: true })} />
                            <input id="fuentePoderModelo" type="text" {...register("fuentePoderModelo", { required: true })} />
                            <input id="fuentePoderSerie" type="text" {...register("fuentePoderSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="otroDispositivoMarca">Otro dispositivo</label>
                            <input id="otroDispositivoMarca" type="text" {...register("otroDispositivoMarca", { required: true })} />
                            <input id="otroDispositivoModelo" type="text" {...register("otroDispositivoModelo", { required: true })} />
                            <input id="otroDispositivoSerie" type="text" {...register("otroDispositivoSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="unidadCdMarca">Unidad de CD/DVD</label>
                            <input id="unidadCdMarca" type="text" {...register("unidadCdMarca", { required: true })} />
                            <input id="unidadCdModelo" type="text" {...register("unidadCdModelo", { required: true })} />
                            <input id="unidadCdSerie" type="text" {...register("unidadCdSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="monitorMarca">Monitor</label>
                            <input id="monitorMarca" type="text" {...register("monitorMarca", { required: true })} />
                            <input id="monitorModelo" type="text" {...register("monitorModelo", { required: true })} />
                            <input id="monitorSerie" type="text" {...register("monitorSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="tecladoMarca">Teclado</label>
                            <input id="tecladoMarca" type="text" {...register("tecladoMarca", { required: true })} />
                            <input id="tecladoModelo" type="text" {...register("tecladoModelo", { required: true })} />
                            <input id="tecladoSerie" type="text" {...register("tecladoSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="mouseMarca">Mouse</label>
                            <input id="mouseMarca" type="text" {...register("mouseMarca", { required: true })} />
                            <input id="mouseModelo" type="text" {...register("mouseModelo", { required: true })} />
                            <input id="mouseSerie" type="text" {...register("mouseSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="impresoraMarca">Impresora</label>
                            <input id="impresoraMarca" type="text" {...register("impresoraMarca", { required: true })} />
                            <input id="impresoraModelo" type="text" {...register("impresoraModelo", { required: true })} />
                            <input id="impresoraSerie" type="text" {...register("impresoraSerie", { required: true })} />
                        </div>

                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="reguladorMarca">Regulador</label>
                            <input id="reguladorMarca" type="text" {...register("reguladorMarca", { required: true })} />
                            <input id="reguladorModelo" type="text" {...register("reguladorModelo", { required: true })} />
                            <input id="reguladorSerie" type="text" {...register("reguladorSerie", { required: true })} />
                        </div>
                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="upsMarca">UPS</label>
                            <input id="upsMarca" type="text" {...register("upsMarca", { required: true })} />
                            <input id="upsModelo" type="text" {...register("upsModelo", { required: true })} />
                            <input id="upsSerie" type="text" {...register("upsSerie", { required: true })} />
                        </div>
                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="bateriaMarca">Bateria</label>
                            <input id="bateriaMarca" type="text" {...register("bateriaMarca", { required: true })} />
                            <input id="bateriaModelo" type="text" {...register("bateriaModelo", { required: true })} />
                            <input id="bateriaSerie" type="text" {...register("bateriaSerie", { required: true })} />
                        </div>
                        <div className='fichaTecnica__inputTableContainer'>
                            <label htmlFor="adaptadorCorrienteMarca">Adaptador corriente</label>
                            <input id="adaptadorCorrienteMarca" type="text" {...register("adaptadorCorrienteMarca", { required: true })} />
                            <input id="adaptadorCorrienteModelo" type="text" {...register("adaptadorCorrienteModelo", { required: true })} />
                            <input id="adaptadorCorrienteSerie" type="text" {...register("adaptadorCorrienteSerie", { required: true })} />
                        </div>

                    </div>
                    <div className="fichaTecnica__btnContainer">
                        <input className="primaryBtn" type="submit" value="Continuar" />
                    </div>
                </form>
            </div>
        </div>
    )
}
