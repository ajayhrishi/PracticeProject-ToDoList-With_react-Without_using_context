import Heading from "./Pages/Heading";
import AddTask from "./Pages/AddTaks";
import BodyDisplay from "./Pages/BodyDisplay";
import { useState } from "react";

function App(){
    const [body,setBody]= useState("Tasks");
    const [tasks,setTasks] = useState([]);
    const [completed,setCompleted] = useState([]);



    const ChangeBody = (element)=>{
        setBody(element);
    }
    /*----------------Task Operations ------------------------*/
    const AddPendingTask = (element) =>{
        setTasks(element);
    }
    const deletePendingTask = (key) =>{
        const newTasks = tasks.filter((task)=>{
            if(key!==task.key){
                return task;
            }
            return null;
        });
        setTasks(newTasks);
    }

    const EditPendingTask = (key,value) =>{
        console.log('this is the EditTask function in the App.js');
        console.log('we received udpated request with the key', key, ' and value of ', value);

        
        const newTasks = tasks.map((t)=>{
            if(key===t.key){return {key:t.key, value}}
            else{
                return t;
            }
        });
        setTasks(newTasks);
        
    }


    
/*----------------Function to handle the Operations on the Completed Tasks ------------------------*/
    const CompleteTheTask = (key) =>{
        const t = tasks.filter((task)=>{
            if(key===task.key){
                console.log(task, 'is selected as completed');
                return task;
            }
            return null;
        });
        deletePendingTask(key);
        const completedTask = [...completed,...t];
        setCompleted(completedTask);
        return;
    }

    const deleteOneCompletedTask = (key) =>{
        const t = completed.filter((task)=>{
            if(key!==task.key){
                return task;
            }
            return null;
        });
        setCompleted(t);
    }

    const AssignBackToPending = (key) => {
        const t = completed.filter((task)=>{
            if(key===task.key){
                return task;
            }
            return null;
        });

        deleteOneCompletedTask(key);

        const newTask = [...tasks,...t]
        setTasks(newTask);
    }


    const EditTheCompletedTask = (key,value) =>{
        console.log('this is the EditTheCompletedTask function in the App.js');
        console.log('we received udpated request with the key', key, ' and value of ', value);
        
        const newTasks = completed.map((t)=>{
            if(key===t.key){return {key:t.key, value}}
            else{
                return t;
            }
        });
        setCompleted(newTasks);   
    }

/*--------------------------------------------------------------------------- */

    return <div >
            <div id="ModalReceiver"></div>
            <Heading body={body} flip={ChangeBody}/>
            <AddTask tasks={tasks} add={AddPendingTask}/>
            <BodyDisplay update={EditPendingTask} deletef={deletePendingTask} complete={CompleteTheTask} tasks={tasks} completed={completed} 
            deleteC={deleteOneCompletedTask} undo={AssignBackToPending} updateC = {EditTheCompletedTask}/>
            </div>
  
}

export default App;