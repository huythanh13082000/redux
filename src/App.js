
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTask} from './actions/task';
import {deleteTask} from './actions/task';
import {resetTask} from './actions/task';
function App() {
  const listTask = useSelector(state=>state.task.task);
 const [id,setId]=useState("");
 const [name,setName]=useState("");
 const dispatch = useDispatch();
 const addtask =()=>{
   (id!==""&&name!=="")?
dispatch(addTask({id:id,name:name})):alert('Nhập đủ các trường');
 }
 const deletetask=(params)=>{
   dispatch(deleteTask(params))
 }
 const resettask=(params)=>{
  dispatch(resetTask(params))
}
  return (
    <div className="App">
      <input placeholder='id' name="id" onChange={(e)=>{setId(e.target.value)}}/>
      <br/>
      <input placeholder='name' name="name"  onChange={(e)=>{setName(e.target.value)}}/>
      <br/>
      <button onClick={addtask}>Thêm</button>
      {listTask.map((task,index)=>{
        return <div key={index}>
          <p>{task.id}</p>
          <p>{task.name}</p>
          <button onClick={deletetask.bind(this,index)}>Xoá</button>
          <button onClick={resettask.bind(this,index)}>Quay lại</button>
        </div>
      })}
    </div>
  );
}

export default App;
