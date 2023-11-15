import { useState  } from "react";
import TextEditor from "./component/TextEditor/TextEditor";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App"> 
      <center>{state ? <TextEditor /> : null}</center>
    </div>
  );
}

export default App;
