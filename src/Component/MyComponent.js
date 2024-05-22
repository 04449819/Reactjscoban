import React from "react";

class MyComponent extends React.Component {
  render() {
    let ten = "Nguyen van kien",
      tuoi = 18;
    return (
      <h1>{`ho va ten: ${ten}
    tuoi: ${tuoi}`}</h1>
    );
  }
}
export default MyComponent;
