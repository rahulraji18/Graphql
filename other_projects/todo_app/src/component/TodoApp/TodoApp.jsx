import React, { Component } from "react";
import "./TodoApp.css";
import { dynamicHandleChange } from "../../utils";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };
  saveItems = (event) => {
    event.preventDefault();
    const { input, items } = this.state;
    this.setState({
      items: [...items, input],
      input: "",
    });
  };
  deleteItem = (key) => {
    const { items } = this.state;
    this.setState({
      items: items.filter((value, index) => index !== key),
    });
  };
  render() {
    const { input, items } = this.state;
    return (
      <div className="container">
        <form className="input-section" onSubmit={this.saveItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            placeholder="Enter Items..."
            name="input"
            value={input}
            // onChange={(event)=>dynamicHandleChange(event, this)}
            onChange={dynamicHandleChange(this)}
          />
          {/* <button type="button">Add</button> */}
        </form>
        <div className="list-section">
          <ul>
            {items.map((value, index) => {
              return (
                <li key={index}>
                  {value}
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => this.deleteItem(index)}
                  >
                    Delete
                  </i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
