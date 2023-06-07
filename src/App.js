import Heading from "./Pages/Heading";
import AddTask from "./Pages/AddTaks";
import BodyDisplay from "./Pages/BodyDisplay";
import { useEffect, useState} from "react";

import axios from "axios";


function App(){

    useEffect( ()=>{fetchTasks();},[]);

    const [body,setBody]= useState("Tasks");
    const [tasks,setTasks] = useState([]);
    const [completed,setCompleted] = useState([]);

    async function fetchTasks (){

        let TasksSeverData = await axios.get('http://localhost:3005/tasks/');
        let CompletedTasks = await axios.get('http://localhost:3005/completedTasks/');
        TasksSeverData = [...TasksSeverData.data];
        CompletedTasks = [...CompletedTasks.data];
        setTasks(TasksSeverData);
        setCompleted(CompletedTasks);
    }

    const ChangeBody = (element)=>{
        setBody(element);
    }
    /*----------------Task's Operations ------------------------*/
    const AddPendingTask = async(TaskToAdd) => {
       await axios.post("http://localhost:3005/tasks/",{"value":TaskToAdd});
       fetchTasks();
    }

    const EditPendingTask = async (id,value) => {
      await axios.put("http://localhost:3005/tasks/"+id,{value:value});
      fetchTasks();
    }

    const deletePendingTask = async(id) => {
        await axios.delete("http://localhost:3005/tasks/"+id);
        fetchTasks();
    }
/*----------------Completed Task's Operations ------------------------*/
    const CompleteTheTask = async(id) => {
        let data = await axios.get("http://localhost:3005/tasks/"+id); data = data.data;
        await axios.delete("http://localhost:3005/tasks/"+id);
        await axios.post("http://localhost:3005/completedTasks/",data);
        fetchTasks();
    }
    const deleteOneCompletedTask = async(id) => {
        await axios.delete("http://localhost:3005/completedTasks/"+id);
        fetchTasks();
    }
    const AssignBackToPending = async(id) => {
        let data = await axios.get("http://localhost:3005/completedTasks/"+id); data = data.data;
        await axios.delete("http://localhost:3005/completedTasks/"+id);
        await axios.post("http://localhost:3005/tasks/",data);
        fetchTasks();
    }
    const EditTheCompletedTask = async(id,value) => {
        await axios.put("http://localhost:3005/completedTasks/"+id,{value:value});
        fetchTasks();
    }

/*--------------------------------------------------------------------------- */

    return <div >
            <div id="ModalReceiver"></div>
            <Heading body={body} flip={ChangeBody}/>
            <div className="border w-3/4 rounded">
            <AddTask tasks={tasks} add={AddPendingTask} className="items-center justify-center"/>
            <BodyDisplay update={EditPendingTask} deletef={deletePendingTask} complete={CompleteTheTask} tasks={tasks} completed={completed} 
            deleteC={deleteOneCompletedTask} undo={AssignBackToPending} updateC = {EditTheCompletedTask} className="items-center justify-center"/>
            </div></div>
  
}

export default App;