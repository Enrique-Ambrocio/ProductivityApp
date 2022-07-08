import { useState } from "react"
import styles from '/Users/enriqueambrocio/Desktop/productivity-app/src/components/NewTask/TaskForm.module.css'

function AddTask(props) {

    const [valid, setValid] = useState(true)
    const [task, setEnteredTask] = useState('')
    const [deadline, setEnteredDeadline] = useState('')

    function taskChangeHandler(event) {
        setEnteredTask(event.target.value)
        if (task.trim().length > 0 || deadline.trim().length > 0) {
            setValid(true)
            props.onInValidTask(true)
        }
    }

    function dateChangeHandler(event) {
        setEnteredDeadline(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()


        if (task.trim().length === 0 || deadline.trim().length === 0) {
            setValid(false)
            props.onInValidTask(false)
            return;
        }

        const taskData = {
            title: task,
            deadline: new Date(deadline)
        };

        setValid(true)
        props.onInValidTask(true)
        props.onSaveTaskData(taskData)
        setEnteredDeadline('')
        setEnteredTask('')
    }

    return (

        <form onSubmit={submitHandler}>
            <div className={`${styles["new-expense-control"]} ${!valid && styles.invalid}`}>
                <label>Task</label>
                <input type='text' value={task} onChange={taskChangeHandler} />
            </div>
            <div className={`${styles["new-expense-control"]} ${!valid && styles.invalid}`}>
                <label>Deadline</label>
                <input type='date' value={deadline} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense-action">
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default AddTask