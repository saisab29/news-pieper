import React from 'react'
import newslogo from './newslogo.png'

export default function Spinner() {
    return (
        <div className='text-center'>
            <img src={newslogo} alt="loading" />

        </div>
    )
}