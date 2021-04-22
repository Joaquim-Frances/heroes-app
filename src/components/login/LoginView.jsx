import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';


export const LoginView = ({history}) => {
    
    
    
    const {dispatch} = useContext(AuthContext);

    const user = {
        name: 'Quim',
    }

    const handleLogin = () => {

        
        const newLogin = {
            type: '[auth] login',
            payload: user,
        }
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch(newLogin);
        
        history.replace(lastPath);
    }

    return (
        <div  className='container mt-5'>
            <h1>Login</h1>
            <hr/>

            <button className='btn btn-primary' onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
