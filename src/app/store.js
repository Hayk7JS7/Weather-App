import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "../features/clocks/clockSlice";
import weatherModalReducer from "../features/modal_one_day_weather/weatherModalSlice";
import fourDayWeatherModalReducer from "../features/four_days_fourcast_modal/fourDayWeatherSlice";
import chartReducer from "../features/charts/Chartslice";

const store = configureStore({
    reducer: {
        clock: clockReducer,
        weatherModal: weatherModalReducer,
        fourDayWeatherModal: fourDayWeatherModalReducer,
        chart: chartReducer
    }
})

export default store;