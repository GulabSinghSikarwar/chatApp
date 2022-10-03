import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    socket:null
}
const SocketSlice=createSlice({
    name:"socketSlice",
    initialState:initialState
    ,
    reducers:{
        setSocket:(state,action)=>{
            state.socket=action.payload;

        }
    }

});

 export const {setSocket }=SocketSlice.actions;
export default SocketSlice.reducer;

