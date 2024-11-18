import styles from "./todoitem.module.css";
export default function ToDoItem({item, todos, setToDos})
{
    function handleDelete(item){
        console.log("delete ", {item});
        setToDos(todos.filter((todo) => todo !== item));
        
    }
    return (
    <div className={styles.item}>
        <div className={styles.itemName} >
            {item}
            <span><button onClick={() => handleDelete(item)}
            className={styles.deleteButton} >Delete</button></span>
            <hr className={styles.line}></hr>
        </div>
    </div>
    );
}