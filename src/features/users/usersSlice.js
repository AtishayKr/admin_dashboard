import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:[],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.value = action.payload
        },
        deleteData: (state, action) => {
            console.log(action.payload)
            state.value = state.value.filter((dataItem) => (dataItem.id !== action.payload) )
        },
        updateData: (state,action) => {
            state.value.map((dataItem) => (dataItem.id === action.payload.id ? dataItem = action.payload.data : value))
        }
    }
})

export const {addData,deleteData, updateData} = usersSlice.actions

export default usersSlice.reducer