import {useState}from 'react';


function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description:"from 7-9",
    completed: false
  },

  {
    title: "dsa",
    description:"study",
    completed: true
  },
  {  
    title: "go to gym",
    description:"from 7-9",
    completed:false
  }
  ]);
  

  function addtodo(){
    setTodos([...todos,{
      title: "go to gym",
    description:"from 7-9",
    completed:false
    }])
  }


  return ( 
    
      <div>
        <button onClick={addtodo} >Add Todo</button>
        { todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description} />
        }
        )}
      
      </div>
  )
}

function Todo(props) {


  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
 