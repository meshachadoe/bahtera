import React from 'react'
import image from '../../assets/patient.jpg'
import './style.scss'

const ServiceCard = ({heading, desc, img, providers}) => {
    // const image = require(`../../assets/${img}`)
    return (
        <div className='service'>
            <div className='service__content'>
                <h2>{heading}</h2>
                <p>{desc}</p>
            </div>
            <div className='service__img'>
                <img src={image} alt='patient'/>
            </div>
            <div className='service__additional'>
                {
                    providers ?
                    <p><strong>Penyedia Kesehatan</strong> <br />{providers}</p> :
                    null
                }
            </div>
        </div>
    )
}

export default ServiceCard
