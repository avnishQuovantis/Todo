import React,{useState} from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Edit from './Edit'
import Todo from './Todo'
import Add from './Add'
import { useContext } from 'react'

export default function Home() {
  
    const [taskList,setTaskList]=useState([])
    const [task,setTask]=useState("")
    console.log(taskList);
    let searchTask=(obj)=>{
       
    }
   
  
   let addTask=(data)=>{
        let newArr=[...taskList,data]
        setTaskList(newArr)
   }
   
   let deleteTask=(id)=>{
    
        let newlist=taskList.filter(task=>{
            return task.id!=id
        })
        setTaskList(newlist)
    }
    let editTask=(obj)=>{
        
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
                deleteTask={deleteTask}  searchTask={searchTask}/></Route>
                <Route exact path="/add"><Add taskLength={taskList.length} addTask={addTask}/></Route>
                <Route path="/edit"><Edit editTask={editTask}/></Route>
            </Switch>
           
        </Router>
    )
}
