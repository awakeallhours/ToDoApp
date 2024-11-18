import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";
export default function ToDoList({todos, setToDos}) {
    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done));
    return (
        <div className={styles.list}>  
            {sortedTodos.map((item) => (
            <ToDoItem key={item.name} item={item} todos={todos} setToDos={setToDos}/>
        ))}
        </div>
    )
}