import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import { getTodo } from './Utils/handleApi';
function App() {
  const [todo,setTodo]=useState([]);
  useEffect(()=>
  {
    getTodo(setTodo);
  },[])
  return (
    <div className="App">
      <div className="container">
        <h1>Full-Stack Todo App</h1>
      </div>
      <div className="input" style={{textAlign:"center",display:"flex",gap:"20px"}}>
      <input type="text" placeholder="Add Todo Here..."></input>
        <div>Add Todo</div>
        
      </div>
      {todo.map((e,i)=>
      {
        return <Todo key={e._id} text={e.text}/>
      })}

    </div>
  );
}

export default App;




