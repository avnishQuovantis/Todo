import React from 'react'
import { useState } from 'react'
import './style.css'
export default function Todo() {

    const [taskList,setTaskList]=useState([])
    const [task,setTask]=useState("")
   
    let addTask=()=>{
       if(task!=""){

           let newList=[...taskList,{name:task,id:taskList.length}]
      
           
               setTask("")
               setTaskList(newList)
           
       }
        // console.log(this.state.task);
    }
   let deleteTask=(id)=>{

        let newlist=taskList.filter(task=>{
            return task.id!=id
        })
        setTaskList(newlist)
    }
    let editTask=(id)=>{
        
    }

    return (
             <div className="Todo">
                 <h1 className="heading">TaskList</h1>
               <div className="input-group mb-3 inputContainer">
                 <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
                 <button className="btn btn-outline-danger add" onClick={addTask} >add</button>
               </div>
               <Task taskList={taskList} deleteTask={deleteTask} editTask={editTask}/>
            </div>
    
    )
}
function Task(props){
    const {taskList,deleteTask,editTask}=props
    const [edit,setEdit]=useState("")
    return(
        <ul className="taskList">
            {
                taskList.map((obj)=>{
            
                    return(
                      <li  key={obj.id}>
                        <div className="taskName"> {obj.name}    </div>
                        <button className="btn btn-danger delete" onClick={()=>deleteTask(obj.id)}>
                         del
                        </button>
                      </li>
                    )
                })
            }
        </ul>
    )
}
