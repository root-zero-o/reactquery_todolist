import React, {useState} from 'react'
import { ListContainer, TodoType } from '../components/ListContainer'
import usePostTodo from '../Hooks/usePostTodo';

const Index = () => {

  const [newTodo, setNewTodo] = useState("");
  const { mutate } = usePostTodo();

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      content : newTodo,
      completed: false
    })
  }

  return (
    <div className="w-[600px] flex flex-col justify-center items-center rounded-lg border-indigo-300 border-8 bg-indigo-100">
      <h1 className="font-mono text-[30px] font-bold">To Do List</h1>
      <h2 className="font-mono">with React Query & tailwind CSS !</h2>
      <form 
        onSubmit={handleSubmit}
        className="w-[300px] flex flex-col justify-center items-center mt-5 p-5">
          <h3 className="font-mono">Write your plans</h3>
          <div className="flex mt-3">
            <input 
              type="text"  
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-[200px] mr-3 p-2"/>
            <button className="w=[50px] rounded-lg bg-indigo-200 p-2 font-mono">submit</button>
          </div>
      </form>
      <ListContainer/>
    </div>
  )
}

export default Index;
