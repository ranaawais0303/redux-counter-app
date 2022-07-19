import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
const Counter = () => {
  //read state
  const counter = useSelector((state) => state.counter);
  //update state
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", counter: 5 });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
