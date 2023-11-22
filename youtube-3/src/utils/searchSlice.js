const { createSlice } = require("@reduxjs/toolkit");


const searchSlice=createSlice({
    name: "Search",
    initialState: {
        
    },
    reducers: {
        cacheResults :(state,action)=> {
// {"ip": ["iphone","iphone1"]}
            state ={...action.payload,...state}


        }
    }
})

export const {cacheResults}= searchSlice.actions; 

export default searchSlice.reducer;