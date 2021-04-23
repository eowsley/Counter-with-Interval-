import React from "react";

export const Counter = () => {
  const [counterValue, changeCounter] = React.useState(0);
  const [intervalValue, changeInterval] = React.useState(1);
  
  React.useEffect(() => {
    if (counterValue < 0) changeCounter(0);
  }, [counterValue]);

  React.useEffect(() => {
    if (intervalValue < 1) changeInterval(1);
  }, [intervalValue]);

  return (
    <>
      <h1>Counter with Interval</h1>

      <div className="counter-component">
        <strong>{counterValue}</strong>
        <div className="buttons">
          <button onClick={() => changeCounter(counterValue + intervalValue)}>
            increase counter
          </button>
          <button onClick={() => changeCounter(counterValue - intervalValue)}>
            decrease counter
          </button>
        </div>
      </div>

      <div className="counter-component">
        <strong>{intervalValue}</strong>
        <div className="buttons">
          <button onClick={() => changeInterval(intervalValue + 1)}>
            increase interval
          </button>
          <button onClick={() => changeInterval(intervalValue - 1)}>
            decrease interval
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
