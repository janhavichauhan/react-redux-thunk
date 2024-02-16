import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    users: []
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
})

const userSlice = createSlice({
    name:"user",
    initialState: initialState,
    reducers:{
        setUsers:(state, action) =>{
            state.users = [...action.payload]
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUsers.fulfilled,(state,action) =>{
            state.users = action.payload
        })
    }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
export const selectUsers = (state) => state.userReducer.users;
