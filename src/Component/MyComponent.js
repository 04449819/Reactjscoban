import React from "react";
import UserInfor from "./UseInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nguyen Van A", age: 25, address: "Ha Noi" },
      { id: 2, name: "Nguyen Van B", age: 27, address: "Ha Nam" },
      { id: 3, name: "Nguyen Van C", age: 29, address: "Ha Tinh" },
    ],
  };
  render() {
    const { listUsers } = this.state;
    return (
      <>
        <UserInfor />
        <br /> <br />
        <DisplayInfor listUsers={listUsers} />
      </>
    );
  }
}
export default MyComponent;
