const initialState = {
    task:[]
}

const  taskReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TASK':{
                const listTask = [...state.task]
                listTask.push(action.payload)
                return{
                    ...state,
                    task:listTask
                }
        }
        case 'DELETE_TASK':{
            const listTask =[...state.task]
            listTask.splice(action.payload,1)
            return{
                ...state,
                task:listTask
            }
        }
        case 'RESET_TASK':{
            const listTask =[...state.task]
            const end = listTask.length-action.payload-1;
            const start = action.payload+1;
            listTask.splice(start,end)
            return{
                ...state,
                task:listTask
            }
        }
        default: return state;
    }
}
export default taskReducer;