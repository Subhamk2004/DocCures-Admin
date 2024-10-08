import React, { useState } from 'react'
import { useEffect } from 'react'
import logofull from '../assets/images/logofull.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from '../redux/AdminSclice';

function Login() {

    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [data, setData] = useState();
    const navigate = useNavigate();
    let dispatch = useDispatch();

    let server_url = import.meta.env.VITE_DOCCURES_SERVER_URL;

    useEffect(() => {
        console.log(data);
        if (data) {
            if (data.isAuthenticated) {
                dispatch(authenticate(data));
                navigate('/dashboard');
            }
        }
    }, [data])

    let handleSubmit = async (e) => {
        e.preventDefault();

        let response = await fetch(`${server_url}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`
            }),
            credentials: 'include'
        })

        setData(await response.json());
        console.log(data);
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-8'>
            <h1 className='text-3xl font-bold text-primary'>Welcome Admin</h1>
            <form className='shadow-lg shadow-darkGray rounded-3xl p-8 bg-white flex flex-col gap-7 items-center px-[40px]'
                onSubmit={handleSubmit}
            >
                <img src={logofull} className='w-[100px]' />
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email' className='text-xl font-semibold'>Email</label>
                    <input type='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none min-w-[300px] p-2 bg-secondary rounded-xl shadow-md shadow-darkGray' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='password' className='text-xl font-semibold'>Password</label>
                    <input type='password'
                        id='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none min-w-[300px] p-2 bg-secondary rounded-xl shadow-md shadow-darkGray' />
                </div>
                <button className='p-3 min-w-[300px] bg-primary rounded-xl text-2xl font-semibold text-white hover:bg-[#0000ffd3]'
                    type='submit'
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login