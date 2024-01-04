import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"
import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async(res)=>{
      const json = await res.json()
      setTodos(json.todos)
    })
  }, [])
  

  return (
    <>
      <CreateTodo />
      <Todos todos={todos}>

      </Todos>
    </>
  )
}

export default App
