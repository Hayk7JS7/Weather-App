import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    isOpen: false,
    cityName: "",
    loading: false,
    error: null,
    data: null
}

const weatherModalSclice = createSlice({
    name: "weatherModal",
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        dataFalse: (state) => {
            state.data = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataWithAxios.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchDataWithAxios.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.data = action.payload
            })
            .addCase(fetchDataWithAxios.rejected, (state) => {
                state.loading = false
                state.data = false
                state.error = true
            })
    }
})


    export const fetchDataWithAxios = createAsyncThunk(
        'weatherModal/fetchDataWithAxios',
        async (cityName, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8d96b2ac78a4706f6ab0df81a16cb24a`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
        }
    )
export const { open, close, dataFalse } = weatherModalSclice.actions;

export default weatherModalSclice.reducer;