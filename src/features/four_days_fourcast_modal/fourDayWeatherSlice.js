import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: null,
    error: null,
    openFourDaysModal: false,
    fourDayWeatherArr: []
}

const fourDayWeatherModalSlice = createSlice({
    name: "fourDayWeatherModal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.openFourDaysModal = true
        },
        closeModal: (state) => {
            state.openFourDaysModal = false
        },
        setFourDayWeather: (state, action) => {
            state.fourDayWeatherArr = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fourDayWeatherWithAxios.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fourDayWeatherWithAxios.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.data = action.payload
            })
            .addCase(fourDayWeatherWithAxios.rejected, (state) => {
                state.loading = false
                state.data = false
                state.error = true
            })
    }
})

export const fourDayWeatherWithAxios = createAsyncThunk(
    "fourDayWeatherModal/fourDayWeatherWithAxios",
    async (cityName, { rejectWithValue }) => {
        try {
            const responce = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=994ff34bac1f7e2f790479d311622faf`)
            return responce.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const {openModal, closeModal, setFourDayWeather} = fourDayWeatherModalSlice.actions

export default fourDayWeatherModalSlice.reducer