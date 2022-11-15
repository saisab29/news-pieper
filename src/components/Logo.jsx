import React from 'react'
import newslogo from './newpieperlogo2.png'
import './logo.css'

export default function Spinner() {
    return (
        <div className='logo'>
            <img src={newslogo} alt="loading" />

        </div>
    )
}