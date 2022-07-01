import React from 'react'
import useGetTodos from '../Hooks/useGetTodos';
import List from './List';
import { TodoType } from '../types';

export const ListContainer = () => {

    const { data } = useGetTodos();

  return (
    <>
        {data?.map((todo : TodoType, index : number) => 
            (<List 
                key={index}
                id={todo?.id}
                content={todo?.content}
                completed={todo?.completed}/>))}       
    </>
  )
}
