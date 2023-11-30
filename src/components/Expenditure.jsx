import React, { useRef, useState } from 'react'
import { useDispatch } from "react-redux"
import { addExp } from '../redux/expSlice'

function Expenditure() {
    // const [expenditure, setExpenditure] = useState("")
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const addNewExp = () => {
        console.log("newExp", inputRef.current.value)
        const newExp = inputRef.current.value
        // setExpenditure(newExp)
        if (newExp !== "") {
            dispatch(addExp(newExp))
            inputRef.current.value = ""
        }

    }

    // console.log("expenditure", expenditure)

    return (
        <div>
            <h1>Expenditure</h1>
            <input type="text" placeholder='Add you expenditure' ref={inputRef} />
            <button onClick={addNewExp}>Add Expenditure</button>
        </div>
    )
}

export default Expenditure