import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //when app starts keep everything empty  
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({

    name:"user",
    initialState,
    reducers:{
        setUserLoginDetails:(state,action)=>{ //when the user logs in remember all the stuffs
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo;
        },

        setSignOutState:(state)=>{//when user logout make all as null or forget or reset
            state.name=null;
            state.email=null;
            state.photo=null; 
        },
    }
});

export const{setUserLoginDetails,setSignOutState} = userSlice.actions;

export const selectUserName = state => state.user.name 
export const selectUserEmail = state => state.user.email 
export const selectUserPhoto = state => state.user.photo 

export default userSlice.reducer;