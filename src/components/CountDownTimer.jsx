import React, { useEffect, useState } from "react";

const CountDownTimer = () => {
  const [stopTime, setStopTime] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timeinSeconds =
      time.hours * 3600 + time.minutes * 60 + Number(time.seconds);
    // console.log(timeinSeconds);
    setStopTime(timeinSeconds);
  }, [time]);

  useEffect(() => {
    console.log(stopTime);
  }, [stopTime]);

  useEffect(() => {
    let timerId;
    if (!isRunning || stopTime === 0) return;

    timerId = setTimeout(() => {
      setStopTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [isRunning, stopTime]);

  //   1 hour = 60 minutes

  const hours = String(Math.floor(stopTime / 3600)).padStart(2, "0");
  const minutesLeft = String(Math.floor((stopTime % 3600) / 60)).padStart(
    2,
    "0"
  );

  const secondsLeft = String(Math.ceil(stopTime % 60)).padStart(2, "0");

  return (
    <div className="flex flex-col gap-5 justify-center h-full items-center">
      <h3>CountDown Timer</h3>
      <div className="flex gap-5 border">
        <input
          onChange={(e) => setTime({ ...time, hours: e.target.value })}
          value={time.hours}
          placeholder="00"
        />{" "}
        :
        <input
          onChange={(e) => setTime({ ...time, minutes: e.target.value })}
          value={time.minutes}
          placeholder="00"
        />{" "}
        :
        <input
          onChange={(e) => setTime({ ...time, seconds: e.target.value })}
          value={time.seconds}
          placeholder="00"
        />{" "}
        :
      </div>
      <div>
        {hours}:{minutesLeft}:{secondsLeft}
      </div>
      <div className="flex gap-5">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default CountDownTimer;
