import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";
export default function ToDoList({todos, setToDos}) {
    return (
        <div className={styles.list}>  
            {todos.map((item) => (
            <ToDoItem key={item} item={item} todos={todos} setToDos={setToDos}/>
        ))}
        </div>
    )
}