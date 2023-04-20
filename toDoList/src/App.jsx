import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css'

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

function handleSubmit(e){
  e.preventDefault()

  setTodos((currentTodos)=> {
    return[
      ...currentTodos, {
      id: crypto.randomUUID(), 
      title: newItem, 
      completed: false },]
  })

  setNewItem('')
}

function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id){
        return {...todo, completed}
      }
      return todo
    })
  })
}

function deleteTodo(id) {
  setTodos((currentTodos) => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}
// console.log(todos)

  return(
    <>
    <form onSubmit={handleSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input
        value={newItem}
        type='text' 
        id='item' 
        onChange={e => setNewItem(e.target.value)}> 
      </input>
    </div>
    <button className="btn btn-outline-primary">Add</button>
    </form>

    <h1 className='header'>Todo List</h1>
    <ul className='list'>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
        <li key={todo.id}>
          <label>
            <input 
            type='checkbox' 
            checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}
            >
            </input>
            {todo.title}
          </label>
          <button 
          onClick={() => deleteTodo(todo.id)}
          className="btn-danger red">X</button>
        </li>
        )
        
      })}
      
    </ul>
    </>)
  
}
