import { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';



function App() {
  const [list,setList]= useState([
  "heres a task"

  ]);
const [form, setForm] = useState("");
const [complete, setComplete] = useState()
const newState = [...list,form];
const onSubmitHandler = (event) =>{
  event.preventDefault();
  setList(newState);
  setForm("");
  }
const onDeleteHandler = (index) =>{

  const copyState = [...list];
  copyState.splice(index, 1);
  setList(copyState);

  }
  return (
    <div className="App">
      <div className="flexy">
      <form onSubmit={onSubmitHandler}>
        <input value={form} onChange={(event)=>{setForm(event.target.value)}} type="text" placeholder='new task' />
        <input type="submit" name="" id="" />
      </form>6
        {
          list.map((item,i)=>{
            return<ToDo key={i} name={item} onDelete={()=>{onDeleteHandler(i)}}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
