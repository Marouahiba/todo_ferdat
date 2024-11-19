 import React from'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faTrash,faCircleCheck,faPenToSquare} from '@fortawesome/free-solid-svg-icons'

 const TodosList=({todos,setTodos,setEditTodo })=>{
    const handleComplete =(todo)=> {
        setTodos(
            todos.map((item) =>{
            if(item.id ===todo.id){
                return{...item, completed: !item.completed};
            }
            return item;

            })
        );
    };
    const handleEdit=({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
    const handleDelete =({ id })=> {
        setTodos(todos.filter((todo)=>todo.id !==id));
    };
    return(
        <div>
            {todos.map((todo) =>(
                <li className="list-item" key={todo.id}>
                    <input
                    type="text"
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : ""}`}
                    onChange={(event)=>event.preventDefault()}

                 />
                 
                 <div>
                 <FontAwesomeIcon icon={faCircleCheck} className="button-complete task-button" onClick={() => handleComplete(todo)} />
                 <FontAwesomeIcon icon={faPenToSquare} className="button-edit task-button" onClick={() => handleEdit(todo)}/>
                 <FontAwesomeIcon icon={faTrash} className="button-delete "onClick={() => handleDelete(todo)}/>

                 </div>
                </li>

            ))}
        </div>
    );
 };
 export default TodosList;