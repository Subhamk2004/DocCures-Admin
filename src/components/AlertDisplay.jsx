import React from 'react'
import useAuth from '../hooks/useAuth'

function AlertDisplay({
    alertMessage, alertType
}) {
    const { error } = useAuth();
    if (error) {
        return (
            <div className='w-screen h-screen absolute flex flex-col items-center justify-center gap-5'>
                <h1 className='text-4xl font-extrabold text-[#ec174d]'>
                    Sorry Error from the Server Side
                </h1>

            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default AlertDisplay