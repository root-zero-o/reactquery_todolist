// 누르면 체크가 표시되었다가, 해제되는 버튼 component

import React from 'react'
import { UpdateData } from '../api/main'; // import type
import useUpdateCompleted from '../Hooks/useUpdateCompleted'; // import hook

const CompletedBtn = (updateData : UpdateData ) => {

    const { mutate } = useUpdateCompleted(); 
    const onDeleteBtn = () => {
    mutate({
        id: updateData.id,
        completed: !updateData.completed  // 누를때마다 반대의 불리언 값으로
    });
  }

  return (
    <>
        { updateData?.completed ? <h3 onClick={onDeleteBtn}>✅</h3> : <h3 onClick={onDeleteBtn}>⬜</h3>}
    </>
  )
}

export default CompletedBtn;
