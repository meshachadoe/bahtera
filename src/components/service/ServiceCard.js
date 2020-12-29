import React from 'react'
import image from '../../assets/patient.jpg'
import './style.scss'

const ServiceCard = () => {
    return (
        <div className='service'>
            <div className='service__content'>
                <h1>Klinik Umum</h1>
                <p>KPRJ Bahtera Kasih menyediakan pelayanan klinik umum untuk keluhan umum, untuk pasien rawat jalan </p>
            </div>
            <div className='service__img'>
                <img src={image} alt='patient'/>
            </div>
            <div className='service__additional'>
                <p>Penyedia Kesehatan <br /> dr. Islinawati, dr. Sri Redjekiningsih, dr. Jongguk P. Naiborhu, dr. Suzanna Sibuea, dr. Alexander S.P. Hutabarat</p>
            </div>
        </div>
    )
}

export default ServiceCard
