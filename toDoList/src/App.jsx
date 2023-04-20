import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css'

export default function App() {
  return(
    <>
    <form className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input type='text' id='item'></input>
    </div>
    <button className="btn btn-outline-primary">Add</button>
    </form>
    <h1 className='header'>Todo List</h1>
    <ul className='list'>
      <li>
        
          <label>
            <input type='checkbox'></input>
            Item 1
          </label>
          <button className="btn-danger red">X</button>
      </li>
    </ul>
    </>)
  
}
