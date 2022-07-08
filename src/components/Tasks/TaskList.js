import Task from './Task'
import styles from '/Users/enriqueambrocio/Desktop/productivity-app/src/components/Tasks/TaskList.module.css'

function TaskList(props) {

    if (props.tasks.length === 0) {
        return <p>Great Job! No tasks!</p>
    }

    return (
        <ul className={styles['task-list']}>
            {props.tasks.map((task) => (
                <Task key={task.id} title={task.title} deadline={task.deadline} id={task.id} onDelete={props.onDeleteItem} />
            ))}
        </ul>
    )
}

export default TaskList