import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

const App = () => {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    id: 0
  })
  const [edit, setEdit] = useState(false)

  const handleReset = () => {
    setTodo({
      title: "",
      desc: ""
    })
  }

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      const map = todos.map(item => item.id === todo.id ? todo : item)
      setTodos(map)
      setEdit(false)
    } else {
      setTodos([...todos, { ...todo, id: Date.now() }])
    }
    handleReset()
  }

  const onDelete = (e, id) => {
    e.preventDefault()
    const filter = todos.filter((todo) => todo.id != id)
    setTodos(filter)
  }

  const onEdit = (e, id) => {
    e.preventDefault()
    setEdit(true)
    const find = todos.find((todo) => todo.id == id)
    setTodo(find)
  }

  return (
    <>
      <h1 align="center">Ini Simple Todo</h1>
      <InputTodo edit={edit} todo={todo} handleChange={handleChange} handleSubmit={handleSubmit} />
      <ListTodo todos={todos} onDelete={onDelete} onEdit={onEdit} />
    </>
  )
}

export default App