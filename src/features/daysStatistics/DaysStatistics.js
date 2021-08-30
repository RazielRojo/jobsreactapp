import React, { useState } from "react";
import { fetchDaysData } from "./daysAPI";
import { useSelector, useDispatch } from "react-redux";
import { getDaysAsync, selectDayStatisticsData, getDays } from "./daysSlice";
import { Chart } from "react-google-charts";
import { fetchDays } from "../counter/counterAPI";
export class DaysStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { daysData: [] };
  }
  componentDidMount() {
    fetchDaysData().then((data) => {
      let daysStats = [
        ["Day", "ActiveJobs", "CumulativeJobViews", "PredictedJobViews"],
      ];
      data.forEach((row) => {
        daysStats.push([
          new Date(row["dayDate"]).toDateString(),
          row["activeJobs"],
          row["jobsViews"],
          row["predictedViews"],
        ]);
      });
      console.log(daysStats);
      this.setState({ daysData: daysStats });
    });
  }
  mapDaysData(data) {
    let daysData = [
      ["Day", "ActiveJobs", "CumulativeJobViews", "PredictedJobViews"],
    ];
    data.forEach((row) => {
      daysData.push([
        row["DayDate"],
        row["ActiveJobs"],
        row["JobsViews"],
        row["PredictedViews"],
      ]);
    });
    return daysData;
  }
  // const daysStatisticsTable = useSelector(selectDayStatisticsData);
  //const dispatch = useDispatch();
  //console.log(daysStatisticsTable);
  render() {
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
          data={this.state.daysData}
          //   data={[
          //     ["Day", "ActiveJobs", "CumulativeJobViews", "PredictedJobViews"],
          //     ["2004/05", 165, 450, 614.6],
          //     ["2005/06", 135, 288, 682],
          //     ["2006/07", 157, 397, 623],
          //     ["2007/08", 139, 215, 609.4],
          //     ["2008/09", 136, 366, 569.6],
          //   ]}
          options={{
            title: "Cumulative job views vs. prediction",
            vAxis: { title: "JobViews" },
            hAxis: { title: "Day", format: "dd/MM" },
            seriesType: "bars",
            series: { 1: { type: "line" }, 2: { type: "line" } },
            pointSize: 10,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}
