import React from 'react'
import SchedCard from './SchedCard'

const SchedGrid = ({schedules}) => {
    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
    return (
        <div className='schedgrid'>{
            days.map((day) => (
                <div className='schedgrid__day'>
                    <h3>{day}</h3>
                    { schedules.map((schedule) => {
                        if (schedule.hari === day) {
                            return (
                                <SchedCard nama={schedule.name} poli={schedule.poli} jam={schedule.jam} />
                            )
                        }
                    })}
                </div>
            ))
        }</div>
    )
}

export default SchedGrid
