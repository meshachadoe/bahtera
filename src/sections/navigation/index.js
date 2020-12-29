import React from 'react'
import logoSmall from '../../assets/logo-small.svg'
import './style.scss'

function NavBar() {
    return (
        <nav>
            <div className="nav__links">
                <img src={logoSmall} alt="KPRJ Bahtera Logo"/>
                <ul>
                    <li><a href="#pelayanan">PELAYANAN</a></li>
                    <li><a href="#jadwal">JADWAL PRAKTEK</a></li>
                    <li><a href="#hubungi">HUBUNGI KAMI</a></li>
                </ul>
            </div>
            <a className="nav__call-to-action"href="tel:#"><h3>0882-1258-7129</h3></a>
        </nav>
    )
}

export default NavBar
