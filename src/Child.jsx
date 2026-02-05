export default function Child({ count, onIncrement }) {
  console.log("Child rendered");

  const expensiveValue = slowCalculation(count);

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
