import React from 'react'
import styles from '/Users/enriqueambrocio/Desktop/productivity-app/src/components/TaskFIlter/TaskFilter.module.css'

function TaskFilter(props) {


    function changeHandler(event) {
        props.onAddFilter(event.target.value)
    }

    return (
        <div className={styles['filter-tasks']}>
            <label>Filter by Month</label>
            <select value={props.filteredYear} onChange={changeHandler}>
                <option value='0'>January</option>
                <option value='1'>February</option>
                <option value='2'>March</option>
                <option value='3'>April</option>
                <option value='4'>May</option>
                <option value='5'>June</option>
                <option value='6'>July</option>
                <option value='7'>August</option>
                <option value='8'>September</option>
                <option value='9'>October</option>
                <option value='10'>November</option>
                <option value='11'>December</option>
            </select>
        </div>
    )
}

export default TaskFilter