import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
  render() {
    return <div> Hello </div>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
