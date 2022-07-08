import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/productivity-app/src/components/Tasks/DeadlineDate.module.css'

function DeadLineDate(props) {

    const month = props.deadline.toLocaleString('en-US', { month: 'long' })
    const day = props.deadline.toLocaleString('en-US', { day: '2-digit' })
    const year = props.deadline.toLocaleString('en-US', { year: 'numeric' })

    return (
        <div className={styles['task-deadline']}>
            <h4>Due</h4>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}

export default DeadLineDate