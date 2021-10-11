import React from 'react'
import { useForm } from "react-hook-form";

export const LoginScreen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='heroBackground'>
                <div className="connectividad__header_container">
                    <h3>LOGIN</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="login__form_container">
                        <div className="login__inputsContainer">
                            <div className='login__inputContainer'>
                                <label htmlFor="user">Usuario:</label>
                                <input id="user" type="text" {...register("user", { required: true })} />
                            </div>
                            <div className='login__inputContainer'>
                                <label htmlFor="password">Contraseña:</label>
                                <input id="password" type="password" {...register("password", { required: true })} />
                            </div>
                        </div>

                        <div className="connectividad__btnContainer">
                            <input className="primaryBtn" value="Ingresar" type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
