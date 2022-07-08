import React, { Fragment } from 'react'
import TaskForm from './TaskForm'

function NewTask(props) {

    function saveDataHandler(enteredTaskData) {
        const taskData = {
            ...enteredTaskData,
            id: Math.random().toString()
        }

        props.onAddTask(taskData)
    };


    return (
        <Fragment>
            <TaskForm onSaveTaskData={saveDataHandler} onInValidTask={props.onInValid} />
        </Fragment>
    )
}

export default NewTask 