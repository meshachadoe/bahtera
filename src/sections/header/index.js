import React from 'react'
import './style.scss'
import HighlightCarousel from '../../components/highlight/HighlightCarousel'
import logoBig from '../../assets/logo-big.svg'
import pattern from '../../assets/pattern-batik.svg'

const Header = ({allHighlights}) => {
    return (
        <header>
            <img className="batik" src={pattern} alt=""/>
            <div>
                <img src={logoBig} alt="KPRJ Bahtera Kasih Logo"/>
                <HighlightCarousel highlights={allHighlights} />
            </div>
            <img className="batik" src={pattern} alt=""/>
        </header> 
    )
}

export default Header
