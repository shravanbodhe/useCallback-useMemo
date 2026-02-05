import { useMemo } from "react";

export default function ChildWithUsecallbackAndMemo({ count, onIncrement }) {
  console.log("Child rendered");

  const expensiveValue = useMemo(() => {
    return slowCalculation(count);
  }, [count]);

  return (
    <>
      <p>{expensiveValue}</p>
      <button onClick={onIncrement}>+</button>
    </>
  );
}

function slowCalculation(num) {
  console.log("Heavy work");
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += num;
  }
  return result;
}
