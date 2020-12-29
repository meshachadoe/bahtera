import React from 'react'
import ServiceCard from '../../components/service/ServiceCard'
import './style.scss'

const Pelayanan = () => {
    return (
        <section className='section-pelayanan'>
            <div>
                <h1>Pelayanan</h1>
                <ul>
                    <li><h2>Klinik Umum</h2></li>
                    <li><h2>Klinik Gigi</h2></li>
                    <li><h2>Klinik Ibu & Anak</h2></li>
                    <li><h2>Peserta BPJS Kesehatan</h2></li>
                </ul>
                <ServiceCard />
            </div>
        </section>
    )
}

export default Pelayanan
