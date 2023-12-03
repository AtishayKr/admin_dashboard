import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1
}

export const pageNumberSlice = createSlice({
    name: 'pageNumber',
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setPageNumber} = pageNumberSlice.actions

export default pageNumberSlice.reducer