import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState({})

  useEffect(() => {
    axios.get("/api/todos").then(({ data }) => setTodos(data));
  }, [])

  const deleteTodo = (id, index) => {
    axios.delete('/api/todos/' + id)
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const text = e.currentTarget[0].value;
        const resp = await axios.post('/api/todos', { text })
        setTodos((prevState) => [...prevState, resp.data])

        if (resp.data.newEntry) {
          setTodos((prevState) => [...prevState, resp.data.newEntry])
        }
        if (resp.data.errors) {
          setErrors(resp.data.errors)
        }
      }}>

        <div>
          <input type="text" name="text" id="text" />
          <small>{errors?.text?.message}</small>
          <button>Add Todo</button>
        </div>
      </form>

      {todos.map((ele, index) => <div key={ele._id}>
        <label>
          <input
            type="checkbox"
          // onChange={() => updateTodo(todo._id)}
          // defaultChecked={todo.completed}
          />
          <p>{ele.text}</p>
        </label>
        <button onClick={() => { deleteTodo(ele._id, index) }}>Delete</button>
        <br />
      </div>
      )}
    </div>
  );
}

export default App;



  // const addTodo = (todo) => {
  //   const newTodos = [...todos, todo]
  //   setTodos(newTodos)
  // }

  // const deleteTodo = (index) => {
  //   fetch('http://localhost:3008/todos/' + todos[index].id, {
  //     method: "DELETE"
  //   })
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1)
  //   setTodos(newTodos)
  // }

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await fetch('http://localhost:3008/todos', {})
  //     const data = await result.json()
  //     setTodos(data)
  //   }
  //   getData()
  // }, [])



  // // wir werden was hinzufügen und danach in der Datenbank speichern
  // const handleSubmit = (e) => {

  //   e.preventDefault()
  //   addTodo({
  //     text: value,
  //     complete: false
  //   })

  //   fetch("http://localhost:3008/todos", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       text: value,
  //       complete: false
  //     })
  //   })
  //   setValue('')

  // }

//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <TodoForm value={value} setValue={setValue} handleSubmit={handleSubmit} />
//       <div>
//         {todos.map((todo, index) => {
//           return (
//             <Todo
//               todo={todo}
//               key={index}
//               index={index}
//               deleteTodo={deleteTodo}
//             />
//           )
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
