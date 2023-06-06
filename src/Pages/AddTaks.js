import Button from "../components/Button";
import InputBox from "../components/InputBox";


function AddTask({flip,body}){
    const Tasks = "Tasks";
    const Goals = "Goals";

    const changeStatus = () =>{
        (body===Tasks)?flip(Goals):flip(Tasks);
    }

    return  <div className="flex justify-center items-center"> 
    <Button onClick={()=>{changeStatus();}}>{body}</Button>
    <InputBox/>
    <Button> Add it </Button>
    </div>
}

export default AddTask;