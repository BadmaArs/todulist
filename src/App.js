import './App.css';
import { useState, useEffect} from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoform';
function App() {
  // useState
  const [todos, setTodos] = useState([])

  // useEffect
  useEffect(() => {
    const raw = localStorage.getItem('todos') || JSON.stringify([])
    setTodos(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTask = (userImput) => {
    if(userImput) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userImput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? {...todo,
      complete: !todo.complete} : {...todo})])
  }
  return (
    <div className="App">
      <header>
        <h1>Количество элементов {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map( (todo) => {
        return <ToDo 
        key = {todo.id}
        todo = {todo}
        toggleTask = {handleToggle}
        removeTask = {removeTask} /> 
      })}
     </div>
  );
}

export default App;
