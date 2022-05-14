import { ADD_TASK, UPDATE_TASK,CHECK_TASK} from "../Constants/Actions-Types";

export const add_task =(payload)=>{
    return {
        type: ADD_TASK,
        payload
    }
}

export const update_task =(payload)=>{
    return {
        type: UPDATE_TASK,
        payload
    }
}

export const check_task =(payload)=>{
    return {
        type: CHECK_TASK,
        payload
    }
}
