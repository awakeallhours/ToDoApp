import { useState } from "react";
import styles from "./form.module.css";

export default function Form({todos, setToDos})
{
    const [todo, setToDo]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        setToDos([...todos, todo]);
        setToDo("");
    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input className={styles.modernInput} 
            onChange={(e)=>setToDo(e.target.value)} 
            value={todo} 
            type="text"
            placeholder="Enter to do item..." />
            <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
    );
}