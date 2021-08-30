// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchDays() {
  let responseData;
  fetch("https://localhost:44337/api/DayStatistics/GetDayStatistics")
    .then((response) => {
      response.json();
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      responseData = data;
    });
  return responseData;
}
