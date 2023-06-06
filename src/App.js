import Heading from "./Pages/Heading";
import AddTask from "./Pages/AddTaks";
import BodyDisplay from "./Pages/BodyDisplay";
import { useState } from "react";

function App(){


    const [body,updateBody]= useState("Tasks");

    const ChangeBody = (element)=>{
        updateBody(element);
    }

    return <div >
            <Heading/>
            <AddTask flip={ChangeBody} body={body}/>
            <BodyDisplay body={body}/>
            </div>
  
}

export default App;