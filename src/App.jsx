import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import TodoApp from "./component/TodoApp/TodoApp";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" Component={TodoApp} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
