import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:[],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addData} = usersSlice.actions

export default usersSlice.reducer