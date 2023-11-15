import { useCallback, useMemo, useState } from "react";
import Counter from "./component/Counter";
// import { useHistory } from "react-router-dom";

function App() {
  
  // this.props.history.push("/about");
  // const history = useHistory();
  // history.push("/about");


  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((currentState) => currentState + 1);
  }, [setCount]);
  const myArray = useMemo(() => ["a", "b", "c"], []);
  return (
    <center>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <Counter myArray={myArray} />
    </center>
  );
}

export default App;

//useState
//custom Hooks
//useEffect --componentDidMount(effective), componentdidUpdate(update effective), componentWillUnMount(render or return)
//memo
//useRef
//useCallback-memo
//useMemo
