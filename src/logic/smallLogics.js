export const Kelvintemperature = ({temp = 273.15}) => {
  return `${Math.floor(temp - 273.15)}°C`
}

export const Timeconverter = ({time}) => {
  const epochTime = time
  const date = new Date(epochTime * 1000)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  return `${hours}: ${minutes.toString().length === 1 ? 0 + minutes : minutes}`
}

export const Visibility = ({count}) => {
  return `${(count / 1000).toFixed(1)}km`
}

export const Windspeed = ({speed = 1}) => {
  const temp = 3.6;
  const kmph = Math.round(speed * temp)
  return `${kmph}kmph`
}

export const FirstletterCap = ({word}) => {
  return `${word.charAt(0).toUpperCase() + word.slice(1)}`
}

export const uniqueArray = (arr) => {
  return arr.reduce((acc, obj) => {
    if (!acc.find(day => day.dt_txt.substring(8, 10) === obj.dt_txt.substring(8, 10))) {
      acc.push(obj)
    }
    return acc;
  }, []);
}

export const WeekendDayConventer = ({date}) => {
  if(!date) return 
  const day = new Date(date)
  const weekday = day.getDay()
  const certainDay = weekday === 0 ? "sunday" : weekday === 1 ? "monday" : weekday === 2 ? "tuesday" : weekday === 3 ? "wednesday" : weekday === 4 ? "thursday" : weekday === 5 ? "friday" : "saturday"
  return `${certainDay.substring(0, 1).toUpperCase() + certainDay.substring(1, certainDay.length)}`
}

const Dayconventer = ({date}) => {
  if(!date) return 
  const day = new Date(date)
  const weekday = day.getDay()
  const certainDay = weekday === 0 ? "sunday" : weekday === 1 ? "monday" : weekday === 2 ? "tuesday" : weekday === 3 ? "wednesday" : weekday === 4 ? "thursday" : weekday === 5 ? "friday" : "saturday"
  return `${certainDay} ${day.getDate()}`
}

export default Dayconventer