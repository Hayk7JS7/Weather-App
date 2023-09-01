import { useDispatch, useSelector } from "react-redux";
import Clock from "../clocks_modal/Clocks";
import './Homemain.css'
import { fetchDataWithAxios } from "../../features/modal_one_day_weather/weatherModalSlice";

const Homemain = () => {
    const { initialClocks } = useSelector(state => state.clock)
    const dispatch = useDispatch()

    return (
        <main className="home-main">
            {initialClocks.map(clock => {
                
                return (
                    <div key={Math.random()}>
                        <h1 className="name-clock" onClick={() => dispatch(fetchDataWithAxios(clock.name))}>{clock.name}</h1>
                        <Clock timezone={clock.timezone}/>
                    </div>
                )
            })}
        </main>
    )
  }
  
  export default Homemain;