export const sortLogic = (arr) => {
    const sort = arr.reduce((aggr, val) => {
      const existing = aggr.find(day => day.dt_txt.substring(8, 10) === val.dt_txt.substring(8, 10))
      if (existing) {
        existing.data.push(val)
      } else {
        aggr.push({
          dt_txt: val.dt_txt,
          data: [val]
        })
      }
      return aggr
    }, [])
    return sort
  }