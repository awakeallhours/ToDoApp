import styles from "./todoitem.module.css";
export default function ToDoItem({item, todos, setToDos})
{
    function handleDelete(item){
        console.log("delete ", {item});
        setToDos(todos.filter((todo) => todo !== item));
        
    }

    function handleClick(name){
        const newArray = todos.map((todo) => 
            todo.name === name ? {... todo, done: !todo.done} : todo);
        setToDos(newArray);
        console.log(todos);
    }
    const doneStyle = item.done ? styles.completed : ""
    return (
    <div className={styles.item}>
        <div className={styles.itemName} >
            <span className={doneStyle} onClick={() => handleClick(item.name)}>{item.name}</span>
            <span><button onClick={() => handleDelete(item)}
            className={styles.deleteButton} >Delete</button></span>
            <hr className={styles.line}></hr>
        </div>
    </div>
    );
}