import React from "react";
import { useState, useEffect } from "react";

import "./App.css";

const calculateTimeLeft = () => {
  // let year = new Date().getFullYear();
  const difference = +new Date(`11/21/2022`) - +new Date();
  // console.log( difference)

  let timeLeft: { [key: string]: number } = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  // const timerComponents = new Array< string>()
  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={Math.random()}>
        {timeLeft[interval]} {interval} {"  "}
      </span>
    );
  });
  return (
    <div className="wrapper">
      <div className="timerWrapper">
        {/* {console.log(timerComponents)} */}
        <h1> The 2022 World Cup starts in ⚽ </h1>

        <div className="countWrapper">
          {timerComponents.length ? timerComponents : <span>World Cup!</span>}
        </div>
      </div>
    </div>
  );
}

export default App;
