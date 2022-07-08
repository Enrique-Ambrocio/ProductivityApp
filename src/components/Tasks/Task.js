import DeadLineDate from './DeadLineDate'
import styles from '/Users/enriqueambrocio/Desktop/productivity-app/src/components/Tasks/Task.module.css'

function Task(props) {

    function deleteHandler() {
        props.onDelete(props.id)
    }

    return (
        <div className={styles['task']}>
            <h2>{props.title}</h2>
            <DeadLineDate deadline={props.deadline} />
            <button onClick={deleteHandler}>Completed Task</button>
        </div>
    )
}

export default Task