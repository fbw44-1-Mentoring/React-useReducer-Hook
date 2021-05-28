export const Reducer=(state,action)=>{
 
    switch(action.type){
      case "additem":
        let newTask={id:state.tasks.length, text:action.payload, status:false}
        return ({...state, tasks:[newTask, ...state.tasks]})
      case "updateitem":
        let updateTasks=state.tasks.map(task=>{
          if(task.id===action.payload){
            task.status= !task.status
            return task
          }else{
            return task
          }
        })
        return({...state, tasks:updateTasks})
      case "increment":
        return({...state, counter:state.counter+1})
     case "decrement":
         return ({...state,counter:state.counter-1})
      default:
        return state
    }
   
  
  //universal func
  }
 export const initialState={
    //combined state
    tasks: [{id:0, text:"breakfast",status:false},{id:1, text:"coding",status:false}],
    counter:0
  }
  