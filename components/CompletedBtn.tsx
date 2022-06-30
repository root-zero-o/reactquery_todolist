import React from 'react'
import { UpdateData } from '../api/main';
import useUpdateCompleted from '../Hooks/useUpdateCompleted';

const CompletedBtn = (updateData : UpdateData ) => {

    const { mutate } = useUpdateCompleted(); 
    const onDeleteBtn = () => {
    mutate({
        id: updateData.id,
        completed: !updateData.completed
    });
  }

  return (
    <>
        { updateData?.completed ? <h3 onClick={onDeleteBtn}>✅</h3> : <h3 onClick={onDeleteBtn}>⬜</h3>}
    </>
  )
}

export default CompletedBtn;
