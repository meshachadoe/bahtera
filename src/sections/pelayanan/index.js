import React, { useState } from 'react'
import ServiceCard from '../../components/service/ServiceCard'
import './style.scss'

const Pelayanan = ({ allServices }) => {
    const [ selected, setSelected] = useState('Klinik Umum')
    const pelayanan = ['Klinik Umum', 'Klinik Gigi', 'Klinik Ibu & Anak', 'Peserta BPJS Kesehatan']

    const handleClick = (e) => {
        setSelected(e.target.name)
    }
    
    return (
        <section className='section-pelayanan'>
            <div>
                <h1>Pelayanan</h1>
                <ul>
                    {
                        pelayanan.map((service) => {
                            if (selected === service) {
                                return (<li><button name={service} className='pelayanan__selected' onClick={handleClick}>{service}</button></li>)
                            } else {
                                return (<li><button name={service} onClick={handleClick}>{service}</button></li>)
                            }
                        })
                    }
                </ul>
                {
                    allServices.map((service) => {
                        return selected === service.heading ?
                        <ServiceCard heading={service.heading} desc={service.desc} img={service.img} providers={service.providers}/> :
                        null
                    })
                }
            </div>
        </section>
    )
}

export default Pelayanan
