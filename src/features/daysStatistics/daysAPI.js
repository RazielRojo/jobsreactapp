export function fetchDays() {
  new Promise((resolve) => {
    return fetch("https://localhost:44337/api/DayStatistics/GetDayStatistics")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        //responseData = data;
        return resolve(data);
      });
  });
}
export function fetchDaysData() {
  return fetch("https://localhost:44337/api/DayStatistics/GetDayStatistics")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
