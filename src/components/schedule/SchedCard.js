import React from 'react'
import './style.scss'

const SchedCard = ({nama, poli, jam}) => {
    return (
        <div className='schedule'>
            <div className='schedule__content'>
                <div>
                    <h3>{nama}</h3>
                    <h4>{poli === 'umum' ? 'POLI UMUM' : 'POLI GIGI'}</h4>
                </div>
                <h4>{jam}</h4>
            </div>
            <div className='schedule__clabel'>&nbsp;</div>
        </div>
    )
}

export default SchedCard
