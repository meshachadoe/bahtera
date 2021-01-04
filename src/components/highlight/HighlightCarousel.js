import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Highlight from './Highlight'
import './style.scss'

const HighlightCarousel = () => {
    return (
        <Carousel className='h_carousel' autoPlay centerMode centerSlidePercentage={65} infiniteLoop showStatus={false} showThumbs={false}>
            <Highlight />
            <Highlight />
            <Highlight />
        </Carousel>
    )
}

export default HighlightCarousel

