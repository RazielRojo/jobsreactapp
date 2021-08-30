import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { DaysStatistics } from "./features/daysStatistics/DaysStatistics";
import { DaysStatisticsfun } from "./features/daysStatistics/DaysStatisticsfun";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DaysStatisticsfun name="test" />
      </header>
    </div>
  );
}

export default App;
