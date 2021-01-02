import React from 'react'
import SchedGrid from '../../components/schedule/SchedGrid'
import './style.scss'

const Jadwal = ({allSchedule}) => {
    return (
        <section className='section-jadwal'>
            <h1>Jadwal Praktek</h1>
            <SchedGrid schedules={allSchedule}/>
        </section>
    )
}

export default Jadwal
