import React from 'react'
import './style.scss'
import nurse from '../../assets/nurse.jpg'
import logo from '../../assets/logo-bpjs.png'

const highlight = {
    heading: 'Klinik Bahtera Kasih Bisa Melayani Peserta BPJS',
    description: 'Datang langsung ke KPRJ Bahtera Kasih dengan membawa fotocopy  KTP, KK, Kartu BPJS, E-mail dan No HP',
    imgSrc: '../../assets/nurse.jpg'
}

const Highlight = ({  }) => {
    return (
        <div className="h_slide">
            <div className="h_content">
                <h2>{highlight.heading}</h2>
                <h3>{highlight.description}</h3>
            </div>
            <img src={nurse} alt={"nurse"}/>
            <div className="h_affiliated">
                <img src={logo} alt={"logo"}/>
            </div>
        </div>
    )
}

export default Highlight
