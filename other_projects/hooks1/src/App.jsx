import { useForm } from "./component/UseForm";
import ToggleButton from "./component/ToggleButton";
import { useCallback, useRef, useState } from "react";
import Counter from "./component/Counter";

function App() {
  // const [name, setName] = useState("Rahul");
  const [value, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);
  const nameRef = useRef();
  const accessRef = () => console.log(nameRef?.current.value);
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((currentState)=>currentState + 1);
  }, [setCount]);
  console.log(count);
  return (
    <center>
      <h1>
        Counter <br />
        {count}
      </h1>
      <Counter increment={increment} />
      <p>_________________________________</p>
      <button onClick={accessRef}>useRef</button>
      <p>_________________________________</p>
      {toggle ? <ToggleButton /> : null}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <form action="" autoComplete="off">
        <input
          type="text"
          name="name"
          ref={nameRef}
          value={value.name}
          onChange={handleChange}
          autoFocus
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          placeholder="email"
        />
        <p>________________________________________</p>
        <h1>Welcome {value.name}</h1>
        <button onClick={handleChange}>Reset</button>
      </form>
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
