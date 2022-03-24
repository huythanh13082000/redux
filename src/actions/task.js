export const addTask =(params)=>{
    return {
        type: 'ADD_TASK',
        payload:params
    }
}
export const deleteTask = (params)=>{
    return{
        type:'DELETE_TASK',
        payload:params
    }
}
export const resetTask = (params)=>{
    return {
        type:'RESET_TASK',
        payload:params
    }
}