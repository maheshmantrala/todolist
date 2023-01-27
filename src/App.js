
import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
  const [Editid, SetEditid] = useState(0)
  const handlesubmit = (e) => {
    e.preventDefault();
    if (Editid) {
      const edittodo = todos.find((i) => i.id === Editid)
      const updatedtodos = todos.map((t) => t.id === edittodo.id ? (t = { id: t.id, todo }) : ({ id: t.id, todo: t.todo }))
      setTodos(updatedtodos)
      SetEditid(0)
      setTodo("")
      return
    }
    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("")
    }
  }
  const handledelete = (id) => {
    const deltodo = todos.filter((del) => del.id !== id)
    setTodos([...deltodo])
  }

  const handleedit = (id) => {
    const edittodo = todos.find((i) => i.id === id)
    setTodo(edittodo.todo)
    SetEditid(id)

  }
  return (

    <div className="App" onSubmit={handlesubmit}>
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoform">
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">{Editid ? "Edit" : "Add"}</button>
        </form>


        <ul className="alltodos">
          {
            todos.map((t) => (
              <li className="listtodo">
                <span className="spans" key={t.id}>{t.todo}</span>
                <button onClick={() => handleedit(t.id)}>Edit</button>
                <button onClick={() => handledelete(t.id)}>Delete</button>
              </li>))}
        </ul>
      </div>

    </div>
  )
}

export default App
