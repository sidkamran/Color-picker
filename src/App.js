import React from "react";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "grey"
    };
  }
  updateColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };
  render() {
    return (
      <>
        <div className="color-container">
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("red");
            }}
            style={{ backgroundColor: "red" }}
          ></div>
          <div
            className="color-block"
            onClick={() => this.updateColor("blue")}
            style={{ backgroundColor: "blue" }}
          ></div>
          <div
            className="color-block"
            onClick={() => this.updateColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          ></div>
          <div
            className="color-block"
            onClick={() => this.updateColor("green")}
            style={{ backgroundColor: "green" }}
          ></div>
          <div
            className="color-block"
            onClick={() => this.updateColor("pink")}
            style={{ backgroundColor: "pink" }}
          ></div>
        </div>
        <div
          className="target-div"
          style={{ backgroundColor: this.state.color }}
        ></div>
      </>
    );
  }
}
export default App;
