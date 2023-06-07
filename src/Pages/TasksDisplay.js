import { AiFillEdit,AiFillCloseSquare,AiFillCheckCircle,AiOutlineUndo} from "react-icons/ai";

import { useState } from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

function TasksDiplay({tasks,update, complete, deletef, completed,deleteC, undo, updateC}){

    const [editid,setEditIdState]=useState(false);
    const [editValue, setEditValue] = useState(" ");
    
    const iconClass = "p-2 w-8 h-8 border rounded";

    const Editor = (id) =>{
        setEditIdState(id);
    }

    const updateValue = () =>{
        update(editid,editValue);
        setEditIdState('');
        setEditValue('');
    }

    const udpateCompletedTask = () =>{
        let idToPass = editid.slice(0,editid.length-1);
        updateC(idToPass,editValue);
        setEditIdState('');
        setEditValue('');
    }
    /*----------- creation of Tasks List JSX elements  ---------- */
        const JSXtasks =  tasks.map((element)=>{

            if(editid===element.id){
                return <div key={editid} className="border p-2 font-bold flex">Task:<br/>
                <form onSubmit={(event)=>{event.preventDefault();updateValue();}}>
                <InputBox onChange={(event)=>{setEditValue(event.target.value)}}> {editValue}</InputBox>
                <Button onClick={()=>{updateValue();}}>Save</Button>
                </form>
                </div>
            }

            return <div className="border p-1 font-bold flex" key={element.id}> 
            <div className="flex ">
            <div className=" my-4 justify-end" >{element.value}</div>
            <div className={iconClass} onClick={()=>{complete(element.id)}}><AiFillCheckCircle/></div>
            <div className={iconClass} onClick={()=>{Editor(element.id)}}><AiFillEdit/></div>
            <div className={iconClass} onClick={()=>{deletef(element.id)}}><AiFillCloseSquare/></div>
        </div>  
        </div>  
        });
    /*----------- creation of completed Tasks List JSX element  ---------- */
       const JSXcompletedTask = completed.map((element)=>{

        if(editid===element.id+"c"){

            return <div key={editid} className="border p-2 font-bold flex">Task:<br/>
            <form onSubmit={(event)=>{event.preventDefault();udpateCompletedTask();}}>
            <InputBox onChange={(event)=>{setEditValue(event.target.value)}}> {editValue}</InputBox>
            <Button onClick={()=>{udpateCompletedTask();}}>Save</Button>
            </form>
            </div>
        }
        return <div className="border p-1 font-bold flex" key={element.id}> <div className="flex ">
        <div className=" my-4 justify-end" >{element.value}</div>
        <div className={iconClass} onClick={()=>{undo(element.id)}}><AiOutlineUndo/></div>
        <div className={iconClass} onClick={()=>{Editor(element.id+"c")}}><AiFillEdit/></div>
        <div className={iconClass} onClick={()=>{deleteC(element.id)}}><AiFillCloseSquare/></div>
    </div>  
    </div>  
       });
    /*-------------- Elements that will be returning as JSX elements -------------------- */

    return <div>
 
        <div className="bg-orange-300 mt-10">
        {[...JSXtasks]}
        </div>
        
        <div className="bg-green-300 mt-20">
        {[...JSXcompletedTask] }   
        </div>   
    </div>
}



export default TasksDiplay;

/*  
        
       
    */