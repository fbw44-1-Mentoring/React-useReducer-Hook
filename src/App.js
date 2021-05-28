
import React,{useRef, useState,useReducer} from 'react';
import {initialState,Reducer} from "./Reducer"


function App() {

console.log(useReducer(Reducer, initialState))
const [{tasks,counter}, dispatch]=useReducer(Reducer,initialState)

const inputRef=useRef()



/*   const addItem=(e)=>{
      e.preventDefault()
      dispatch("incrementcounter")
      let text = inputRef.current.value; 
      let newTask={id:tasks.length, text:text, status:false}
      setTasks([newTask, ...tasks])
      inputRef.current.value=""
  } */
/*   const updateStatus=(id)=>{
    let updateTasks=tasks.map(task=>{
      if(task.id===id){
        task.status= !task.status
        return task
      }else{
        return task
      }
    })
    setTasks(updateTasks)
  } */



/*   const incremenet=()=>{
      setCounter(counter+1)
  }
 */

const submitForm=(e)=>{
  e.preventDefault()
  dispatch({type:"additem",payload:inputRef.current.value})
}
  return (
    <div className="App">
      <h1>ToDo App</h1>

      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef}/>
        <input type="submit" value="add task"/>
      </form>

      <ul> {tasks.map(task=>{
        return(
        <li style={{backgroundColor:task.status?"green":"gray"}} key={task.id} onClick={()=>dispatch({type:"updateitem",payload:task.id})}> {task.text} </li>
        )
      })} </ul>


        <div>
    <h2>Counter: {counter}</h2>
    <button onClick={()=>dispatch({type:"increment"})}>increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        </div>
     
    </div>
  );
}


export default App;