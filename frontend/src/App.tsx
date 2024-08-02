import React, { useState } from 'react'

interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}
const App = () => {
  const [todos,setTodos] = useState<Todo[]>([
    { id: 1, title:"Gym",description:"go to gym",done:false},
    { id: 2, title:"Swim",description:"Swim daily",done:false}
  ])
  const [title,setTitle] = useState<string>("")
  const [description,setDescription]  = useState<string>("")
  
  const clearTodos = ()=>{
    setTodos([])
  }
   const onChange = (e:any)=>{
    const { name, value } = e.target;
    console.log(name,value)
    if (name ==="title"){
      setTitle(value)
      console.log(title)
    }
    else {
      setDescription(value)
      console.log(description)
    }
   }

  const addTodo = ()=>{
  
    const todo = {
      title,
      description,
      done:false,
      id:todos.length + 1,
    }
    setTodos([...todos,todo])
    setTitle("")
    setDescription("")
  }
  return (
    <div>
      <div>
        <h1>Create and Explore Todos</h1>
      </div>
      <div>
        <input onChange={onChange} type="text" placeholder='enter title' name = "title"  value ={title}/>
        <input onChange={onChange} type="text" placeholder='enter description' name = "description" value = {description} />
      </div>
      <div className='btn'>
       <button onClick={addTodo}>Add Todo</button>
       <button onClick={clearTodos}>Clear All Todos</button>
      </div>
      <div>
        {todos.map((todo,index)=>{
          return <div>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            {todo.done ? "completed":"not completed"}
             </div>
        })}
      </div>
    </div>
  )
}

export default App