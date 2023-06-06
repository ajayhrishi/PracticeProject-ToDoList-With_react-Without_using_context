import { AiFillEdit,AiFillCloseSquare,AiFillCheckCircle,AiOutlineUndo} from "react-icons/ai";

import { useState } from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

function TasksDiplay({tasks,update, complete, deletef, completed,deleteC, undo, updateC}){

    const [editKey,setEditKeyState]=useState(false);
    const [editValue, setEditValue] = useState('');
    
    const iconClass = "p-2 w-8 h-8 border rounded";

    const Editor = (key) =>{
        setEditKeyState(key);
    }

    const updateValue = () =>{
        update(editKey,editValue);
        setEditKeyState('');
    }

    const udpateCompletedTask = () =>{
        updateC(editKey,editValue);
        setEditKeyState('');
    }
    /*----------- creation of Tasks List JSX elements  ---------- */
        const JSXtasks =  tasks.map((element)=>{

            if(editKey===element.key){


                return <div key={editKey} className="border p-2 font-bold flex">Task:<br/>
                <form onSubmit={(event)=>{event.preventDefault();updateValue();}}>
                <InputBox onChange={(event)=>{setEditValue(event.target.value)}}> Type here</InputBox>
                <Button onClick={()=>{updateValue();}}>Save</Button>
                </form>
                </div>
            }

            return <div className="border p-1 font-bold flex" key={element.key}> 
            <div className="flex ">
            <div className=" my-4 justify-end" >{element.value}</div>
            <div className={iconClass} onClick={()=>{complete(element.key)}}><AiFillCheckCircle/></div>
            <div className={iconClass} onClick={()=>{Editor(element.key)}}><AiFillEdit/></div>
            <div className={iconClass} onClick={()=>{deletef(element.key)}}><AiFillCloseSquare/></div>
        </div>
        </div>  
        });
    /*----------- creation of completed Tasks List JSX element  ---------- */
       const JSXcompletedTask = completed.map((element)=>{

        if(editKey===element.key){
            return <div key={editKey} className="border p-2 font-bold flex">Task:<br/>
            <form onSubmit={(event)=>{event.preventDefault();udpateCompletedTask();}}>
            <InputBox onChange={(event)=>{setEditValue(event.target.value)}}> Type here</InputBox>
            <Button onClick={()=>{udpateCompletedTask();}}>Save</Button>
            </form>
            </div>
        }
        return <div className="border p-1 font-bold flex" key={element.key}> <div className="flex ">
        <div className=" my-4 justify-end" >{element.value}</div>
        <div className={iconClass} onClick={()=>{undo(element.key)}}><AiOutlineUndo/></div>
        <div className={iconClass} onClick={()=>{Editor(element.key)}}><AiFillEdit/></div>
        <div className={iconClass} onClick={()=>{deleteC(element.key)}}><AiFillCloseSquare/></div>
    </div>  
    </div>  
       });
    /*------------------------------------------------------------------------- */

    return <div>
 
        <div className="bg-orange-300 mt-10">
        {[...JSXtasks]}
        </div>
        
        <div className="bg-lime-500 mt-20">
        {[...JSXcompletedTask] }   
        </div>   
    </div>
}



export default TasksDiplay;

/*  
        
       
    */