import React,{useState} from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Edit from './Edit'
import Todo from './Todo'
import Add from './Add'

export default function Home() {
  
    const [taskList,setTaskList]=useState([])
    const [task,setTask]=useState("")
  
   const addTask=(data)=>{
        let newArr=[...taskList,data]
        setTaskList(newArr)
   }
   
   const deleteTask=(id)=>{
    
        let newlist=taskList.filter(task=>{
            return task.id!=id
        })
        setTaskList(newlist)
    }
    const editTask=(obj)=>{
        
        let newArr=[]
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].id==obj.id){
                newArr.push(obj)
            }else{
                newArr.push(taskList[i])
            }
        }
        setTaskList(newArr)
        
    }

    return (
        
        <Router>
            <Switch>
                <Route exact path="/"><Todo taskList={taskList} editTask={editTask} 
                deleteTask={deleteTask} /></Route>
                <Route exact path="/add"><Add taskLength={taskList.length} addTask={addTask}/></Route>
                <Route path="/edit"><Edit editTask={editTask}/></Route>
            </Switch>
           
        </Router>
    )
}
