import React ,{useState}from 'react'
import { useParams,useLocation, Redirect ,} from 'react-router';
import { useHistory } from 'react-router';
import './add.css'
function Add(props){
    let {addTask,taskLength}=props
    // console.log(taskList);
   const history=useHistory()
     let [task,setTask]=useState("")
     let [priority,setPriority]=useState("1")
     let [date,setDate]=useState("")
      
     let handleSubmit=()=>{
       let newPriority=Number(priority)
         let obj={id:taskLength,task:task,priority:newPriority,date:date}
         addTask(obj)
        history.push("/")
     }
    let prioritySelect=(e)=>{
        setPriority(e.target.value);
    }
    let dateSelect=(e)=>{
        setDate(e.target.value)
    }
    let taskSelect=(e)=>{
        setTask(e.target.value)
    }
    let cancelAdd=()=>{
        history.push("/")
    }
    return (
      <div  className="container">
          <h1>Add Task</h1>
            <div>
                <h5>Task Name</h5>
                <input type="text" onChange={taskSelect} class="form-control " placeholder="TaskName" aria-label="taskName"/>
            </div>
            <div>
                <h5>Select Priority</h5>
                <select onChange={prioritySelect} class="form-select" aria-label="Default select example">
                
                    <option selected value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">high</option>
                </select>
            </div>
           <div>
            <h5>Start Date</h5>
            <input value={date} onChange={dateSelect} type="date" id="start" name="trip-start"
                
                min="2021-09-31" max="2030-12-31"/>
           </div>
            <div>
                <button className="btn btn-primary" onClick={handleSubmit}>add</button>
                <button className="btn btn-danger" onClick={cancelAdd}>cancel</button>

            </div>

                        
       </div>
    )
}
export default Add