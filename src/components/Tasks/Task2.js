import React, { Fragment, useState } from 'react'
import TaskFilter from '../TaskFIlter/TaskFilter'
import TaskList from './TaskList'

function Task2(props) {

    const [filteredYear, setFilteredYear] = useState('5');

    function filterHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredTasks = props.tasks.filter(task => {
        return task.deadline.getMonth().toString() === filteredYear;
    })



    return (
        <Fragment>
            <TaskFilter onAddFilter={filterHandler} selectedYear={filteredYear} />
            <TaskList tasks={filteredTasks} onDeleteItem={props.onDeleteTask2} />
        </Fragment>
    )
}

export default Task2;