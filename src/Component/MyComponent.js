import React from "react";
import UserInfor from "./UseInfor";
class MyComponent extends React.Component {
  state = {
    name: "Nguyen Van Kien",
    age: 22,
    address: "Ha Noi",
  };

  HandleOnsubmit(event) {
    event.preventDefault(); // preventDefault ngan hanh dong load lai trang
    console.log(this.state);
  }

  HandleOnchangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  HandleOnchangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  HandleOnchangeAdress(event) {
    this.setState({
      address: event.target.value,
    });
  }

  // vi trong class component nen khi khai bao can them thuoc tinh this.
  render() {
    const { name, age, address } = this.state;
    return (
      <>
        <h1>
          my name is {name} i'm {age} year old i from to {address}
        </h1>
        <form onSubmit={(event) => this.HandleOnsubmit(event)}>
          <div>
            <label>Ho va Ten</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => this.HandleOnchangeName(event)}
            />
          </div>
          <div>
            <label>Tuoi</label>
            <input
              type="text"
              value={this.state.age}
              onChange={(event) => this.HandleOnchangeAge(event)}
            />
          </div>
          <div>
            <label>Dia chi</label>
            <input
              type="text"
              value={this.state.address}
              onChange={(event) => this.HandleOnchangeAdress(event)}
            />
          </div>
          <button>submit</button>
        </form>
        <UserInfor />
      </>
    );
  }
}
export default MyComponent;
