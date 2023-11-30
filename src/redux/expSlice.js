import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenditure: []
}

const expSlice = createSlice({
    name: 'expenditure',
    initialState,
    reducers: {
        // action
        addExp: (state, action) => {
            console.log("state", state.expenditure, "action", action.payload)
            let newData = state.expenditure.push({ id: Date.now(), category: action.payload })
            console.log("newData", newData)
            console.log(state, action)
        },
        deleteExp: (state, action) => {
            state.expenditure = state.expenditure.filter((expend) => expend.id !== action.payload)
            console.log(action.payload)
            console.log(state.expenditure)
        }

    }
})

export const { addExp, deleteExp } = expSlice.actions

export default expSlice.reducer