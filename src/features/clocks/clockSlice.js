import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialClocks: [{timezone: 14400, name: "Yerevan"},{timezone: 3600, name: "Amsterdam"}, {timezone: 3600, name: "London"}, {timezone: -25200, name: "Washington"}]
}

const clockSlice = createSlice({
    name: "clock",
    initialState,
    reducers: {
        setInitialClocks: (state, action) => {
            state.timezones = action.payload
        }
    }
})


export default clockSlice.reducer