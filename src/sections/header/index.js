import React from 'react'
import './style.scss'
import Highlight from '../../components/highlight/Highlight.js'
import logoBig from '../../assets/logo-big.svg'

const Header = ({allHighlights}) => {
    return (
        <header>
            <img src={logoBig} alt="KPRJ Bahtera Kasih Logo"/>
            <Highlight highlight={ allHighlights }/>
        </header> 
    )
}

export default Header
