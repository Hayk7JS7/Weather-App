import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openChart: false,
    chartArray: [],
    displayedChartIndex: 0,
}

const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {
        setOpenChart: (state, action) => {
            state.openChart = action.payload
        },
        setChartArr: (state, action) => {
            state.chartArray = action.payload
        },
        setDisplayedChartIndexIncreament: (state) => {
            if(state.displayedChartIndex >= state.chartArray.length - 1){
                state.displayedChartIndex = 0
            } else {
            state.displayedChartIndex += 1
            }
        },
        setDisplayedChartIndexDecreament: (state) => {
            if(state.displayedChartIndex <= 0){
                state.displayedChartIndex = state.chartArray.length - 1
            } else {
            state.displayedChartIndex -= 1
            }
        }
    }
})

export const { setOpenChart, setChartArr, setDisplayedChartIndexIncreament, setDisplayedChartIndexDecreament  } = chartSlice.actions

export default chartSlice.reducer