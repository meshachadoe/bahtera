import React from 'react'
import ServiceCard from '../../components/service/ServiceCard'
import './style.scss'

const Pelayanan = () => {
    const pelayanan = ['Klinik Umum', 'Klinik Gigi', 'Klinik Ibu & Anak', 'Peserta BPJS Kesehatan']
    return (
        <section className='section-pelayanan'>
            <div>
                <h1>Pelayanan</h1>
                <ul>
                    <li>Klinik Umum</li>
                    <li>Klinik Gigi</li>
                    <li>Klinik Ibu & Anak</li>
                    <li>Peserta BPJS Kesehatan</li>
                </ul>
                <ServiceCard />
            </div>
        </section>
    )
}

export default Pelayanan
