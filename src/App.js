import { Fragment, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Task2 from "./components/Tasks/Task2";
import styles from '/Users/enriqueambrocio/Desktop/productivity-app/src/App.module.css'


const toDoData = [
  {
    id: 'a1',
    title: 'Do Homework',
    deadline: new Date(2022, 5, 28)
  },
  {
    id: 'a2',
    title: 'Walk Dog',
    deadline: new Date(2022, 5, 25)
  },
  {
    id: 'a3',
    title: 'Code for 3 hours',
    deadline: new Date(2022, 5, 30)
  }
]



function App() {


  const [tasks, setTasks] = useState(toDoData)
  const [shake, setShake] = useState(true)


  function addTaskHandler(task) {
    setTasks(prevTasks => {
      const list = [task, ...prevTasks];
      return list
    })
  }

  function deleteItemHandler(taskId) {
    setTasks(prevTasks => {
      const updatedList = prevTasks.filter(task => task.id !== taskId);
      return updatedList
    })
  }

  function invalidItemHandler(validity) {
    if (validity === true) {
      setShake(true)
      return;
    }
    if (validity === false) {
      setShake(false)
    }

  }


  return (
    <Fragment>
      <div className={`${styles['task-form-container']} ${!shake && styles.invalid}`}>
        <section id={styles["task-form"]}>
          <div className={styles['form-title']}>
            <h1>Tasks to Do!</h1>
          </div>
          <NewTask onAddTask={addTaskHandler} onInValid={invalidItemHandler} />
        </section>
      </div>
      <section id={styles["task-list"]}>
        <Task2 tasks={tasks} onDeleteTask2={deleteItemHandler} />
      </section>
    </Fragment>
  );
}

export default App;