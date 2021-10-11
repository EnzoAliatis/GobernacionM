import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../api/api';
import { SubmitSpinner } from '../components/buttons/SubmitSpinner';
import { setCredentials, setIsChecking } from '../store/slices/authSlice';

export const LoginScreen = () => {
    const [login, { isLoading, error }] = useLoginMutation();
    const dispatch = useDispatch();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async ({ cedul_usuar, pass_usuar }) => {
        try {
            const { token_usuar } = await login({
                cedul_usuar,
                pass_usuar,
            }).unwrap();
            localStorage.setItem('gbToken', token_usuar);
            dispatch(setCredentials(token_usuar));
            dispatch(setIsChecking());
        } catch (err) {
            console.log('error in login', err);
        }
    };;



    return (
        <div className='heroBackground'>
            <div className="connectividad__container">
                <div className="connectividad__header_container">
                    <h3>LOGIN</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="login__form_container">
                        <div className="login__inputsContainer">
                            <div className='login__inputContainer'>
                                <label htmlFor="cedul_usuar">Usuario:</label>
                                <input id="cedul_usuar" type="text" {...register("cedul_usuar", { required: true })} />
                            </div>
                            <div className='login__inputContainer'>
                                <label htmlFor="pass_usuar">Contraseña:</label>
                                <input id="pass_usuar" type="password" {...register("pass_usuar", { required: true })} />
                            </div>
                        </div>

                        <div className="connectividad__btnContainer">
                            <SubmitSpinner text="Ingresar" isLoading={isLoading} />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
