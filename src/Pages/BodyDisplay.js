/* import GoalDiplay from "./GoalDisplay"; */

import TasksDiplay from "./TasksDisplay";

function BodyDisplay({tasks, update, complete, deletef, completed, deleteC, undo, updateC}){

    return <TasksDiplay tasks={tasks} update={update} complete={complete} deletef={deletef} completed={completed} deleteC={deleteC} undo={undo} updateC={updateC}/>
}

export default BodyDisplay;


/*useEffect(()=>{if(body==="Tasks"){setOutPut(<TasksDiplay/>)}else{setOutPut(<GoalDiplay/>)}},[body]); */


