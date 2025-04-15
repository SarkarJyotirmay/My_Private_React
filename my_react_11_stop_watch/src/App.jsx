  import React, { useEffect, useRef, useState } from "react";

  function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervaIdlRef = useRef(null);
    const startTimeref = useRef(0);

    useEffect(() => {
      if (isRunning) {
        intervaIdlRef.current = setInterval(() => {
          setElapsedTime(Date.now() - startTimeref.current);
        }, 1);
      }
      return () => {
        clearInterval(intervaIdlRef.current);
      };
    }, [isRunning]);

    function start() {
      setIsRunning(true);
      startTimeref.current = Date.now();
    }

    function stop() {
      setIsRunning(false);
    }

    function reset() {
      setElapsedTime(0);
      setIsRunning(false);
    }

    function formatTime() {
      let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      let mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
      let sec = Math.floor((elapsedTime / 1000) % 60);
      let milSec = Math.floor(elapsedTime % 1000 / 10);

      mins = String(mins).padStart(2, "0");
      sec = String(sec).padStart(2, "0");
      milSec = String(milSec).padStart(2, "0");

      return `${mins} : ${sec} : ${milSec}`;
    }

    return (
      <div className="stop-watch">
        <div className="time">{formatTime()}</div>
        <div className="buttons">
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }

  export default App;
