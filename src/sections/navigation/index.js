import React from 'react'
import { Link } from 'react-router-dom'
import logoSmall from '../../assets/logo-small.svg'
import './style.scss'

function NavBar() {
    return (
        <nav>
            <div className="nav__links">
                <Link to='/'>
                    <img src={logoSmall} alt="KPRJ Bahtera Logo"/>
                </Link>
                <ul>
                    <li>
                        <Link to='/'>
                            PELAYANAN
                        </Link>
                    </li>
                    <li>
                        <Link to='/jadwal'>
                            JADWAL PRAKTEK
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            KABAR TERBARU
                        </Link>
                    </li>
                </ul>
            </div>
            <a className="nav__call-to-action"href="tel:#"><h3>0882-1258-7129</h3></a>
        </nav>
    )
}

export default NavBar
