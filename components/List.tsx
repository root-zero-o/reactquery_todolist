import React from 'react'
import { TodoType } from './ListContainer';

const List = ({id, content, completed} : TodoType) => {


  return (
    <div className="font-mono flex w-[400px] justify-between items-center my-3">
        <h3 className="text-[20px]">{id}</h3>
        <h3>{content}</h3>
        { completed ? <h3>✅</h3> : <h3>⬜</h3>}
        <button className="rounded-lg bg-rose-200 p-2">Delete</button>
        <button className="rounded-lg bg-green-200 p-2">Edit</button>
    </div>
  )
}

export default List;
