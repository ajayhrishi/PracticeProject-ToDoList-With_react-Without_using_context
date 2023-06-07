import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { useState } from "react";

function AddTask({add,className,...rest}){

    const [capturing,setCapturing]= useState('');

    const HandleAutoRefresh = (event) =>{
            event.preventDefault();
            updateTasks();
    }

    const updateTasks = () =>{
        add(capturing);
        setCapturing('');
    }

    const captureChange = (event) =>{
        setCapturing(event.target.value);
    }

const newClassName = "border h-24"+ className;

return  <div className={newClassName}> 
<form onSubmit={HandleAutoRefresh} className="flex">
<InputBox onChange={captureChange} className=" m-4 p-1" value={capturing}> Add New Task </InputBox>
<Button className="m-4 h-8" onClick={()=>updateTasks}> Add it </Button>
</form>
</div>
   
}



export default AddTask;


/*



*/