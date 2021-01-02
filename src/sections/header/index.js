import React from 'react'
import './style.scss'
import Highlight from '../../components/highlight/Highlight.js'
import logoBig from '../../assets/logo-big.svg'
import pattern from '../../assets/pattern-batik.svg'

const Header = ({allHighlights}) => {
    return (
        <header>
            <div>
                
            </div>
            <img className="batik" src={pattern} alt=""/>
            <div>
                <img src={logoBig} alt="KPRJ Bahtera Kasih Logo"/>
                <Highlight highlight={ allHighlights }/>
            </div>
        </header> 
    )
}

export default Header
