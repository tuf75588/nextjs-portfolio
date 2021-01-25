import React from "react";

function TestComponent() {
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    const id = window.setInterval(() => {
      setTimer((formerTime) => formerTime + 1);
    }, 1000);
    return () => window.clearInterval(id);
  });
  return <p>this component has been mounted for {timer} seconds</p>;
}
export default TestComponent;
