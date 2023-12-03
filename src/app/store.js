import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../features/users/usersSlice"
import pageNumberReducer from "../features/pages/pageNumberSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        pageNumber: pageNumberReducer
    },
})