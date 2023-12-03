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
            // console.log(action.payload)
            state.value = state.value.filter((dataItem) => (dataItem.id !== action.payload) )
        },
        selectedDelete:(state, action) => {
            state.value = state.value.filter((dataItem) => (dataItem.checked !== true))
        },
        updateData: (state,action) => {
            state.value.map((dataItem) => (dataItem.id === action.payload.id ? dataItem.name = action.payload.newName : dataItem))
            state.value.map((dataItem) => (dataItem.id === action.payload.id ? dataItem.email = action.payload.newEmail : dataItem))
            state.value.map((dataItem) => (dataItem.id === action.payload.id ? dataItem.role = action.payload.newRole : dataItem))
        },
        toggleChecked: (state, action) => {
            state.value.map((dataItem) => (dataItem.id === action.payload ? dataItem.checked = !dataItem.checked : dataItem))
        }
    }
})

export const {addData,deleteData, selectedDelete, updateData, toggleChecked} = usersSlice.actions

export default usersSlice.reducer