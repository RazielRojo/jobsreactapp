import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDayStatisticsData } from "./daysSlice";
import { Chart } from "react-google-charts";
export function DaysStatisticsfun() {
  const days = useSelector(selectDayStatisticsData);
  const dispatch = useDispatch();

  let daysStats = [
    ["Day", "ActiveJobs", "CumulativeJobViews", "PredictedJobViews"],
  ];
  days.forEach((row) => {
    daysStats.push([
      new Date(row["dayDate"]).toDateString(),
      row["activeJobs"],
      row["jobsViews"],
      row["predictedViews"],
    ]);
  });
  console.log(daysStats);

  return (
    <div>
      {/* <h1>Hello, </h1>
        <button
          //className={styles.button}
          onClick={() => dispatch(getDays())}
        >
          Check days
        </button> */}

      <Chart
        width={"80vw"}
        height={"60vh"}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={daysStats}
        options={{
          legend: { position: "bottom" },
          title: "Cumulative job views vs. prediction",
          vAxis: { title: "JobViews" },
          hAxis: { title: "Day", format: "dd/MM" },
          seriesType: "bars",
          series: {
            0: { color: "rgb(221,221,221)" },
            1: {
              color: "rgb(150,192,59)",
              type: "line",
            },
            2: {
              color: "rgb(88,187,209)",
              lineDashStyle: [4, 4],
              pointShape: { type: "circle" },
              type: "line",
            },
          },
          pointSize: 10,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
