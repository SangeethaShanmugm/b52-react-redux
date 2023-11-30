import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deleteExp } from '../redux/expSlice'
function ExpenditureList() {
  //useSelector((state)=> state.reducerName.expSliceName)
  const dispatch = useDispatch()
  const expenditureData = useSelector(((state) => state.myExpenditure.expenditure))

  console.log("expenditureData", expenditureData)


  const deleteExpenditure = (id) => {
    dispatch(deleteExp(id))
  }

  return (
    <div>ExpenditureList
      <ol>
        {expenditureData.map((item) => (
          <li key={item.id}>{item.category}
            <button onClick={() => deleteExpenditure(item.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ExpenditureList