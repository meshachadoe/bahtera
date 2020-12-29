import React from 'react'
import logoSmall from '../../assets/logo-small.svg'

function NavBar() {
    return (
        <nav>
            <div className="nav__links">
                <img src={logoSmall} alt="KPRJ Bahtera Logo"/>
                <ul>
                    <li><a href="#">PELAYANAN</a></li>
                    <li><a href="#">JADWAL PRAKTEK</a></li>
                    <li><a href="#">HUBUNGI KAMI</a></li>
                </ul>
            </div>
            <a className="nav__call-to-action"href="tel:#"><h3>0882-1258-7129</h3></a>
        </nav>
    )
}

export default NavBar
