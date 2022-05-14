import {ADD_TASK, CHECK_TASK, UPDATE_TASK} from '../Constants/Actions-Types'
const initialState={
    tasks:[]
}

    
const taskReducer = (state= initialState, action)=>{
  const { type, payload } = action;
    switch (action.type) {
        case ADD_TASK:
             return {tasks:[...state.tasks,action.payload] };
             
        case UPDATE_TASK:
            return{
              tasks:state.tasks.map(el=> el.id==action.payload.id ? {...el, description:action.payload.description} : el)  
                };

        case CHECK_TASK:
            return{
                tasks: state.tasks.map(task=>task.id==action.payload ? {...task, isDone: !task.isDone} : task)
            }

                
    
        default:
            return state;
    }
}
export default taskReducer;