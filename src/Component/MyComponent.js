import React from "react";
import UserInfor from "./UseInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nguyen Van A", age: 25, address: "Ha Noi" },
      { id: 2, name: "Nguyen Van B", age: 27, address: "Ha Nam" },
      { id: 3, name: "Nguyen Van C", age: 31, address: "Ha Tinh" },
    ],
  };

  HandleAdd = (user) => {
    console.log(">>>check user", user);
    console.log(">>>check state", this.state.listUsers);
    this.setState({
      listUsers: [user, ...this.state.listUsers],
    });
  };

  HandleAddDelete = (userID) => {
    // console.log(">>>check user", userID);
    this.setState({
      listUsers: this.state.listUsers.filter((item) => item.id !== userID),
    });
  };
  render() {
    const { listUsers } = this.state;
    return (
      <>
        <UserInfor HandleAdd={this.HandleAdd} />
        <br /> <br />
        <DisplayInfor
          listUsers={listUsers}
          HandleAddDelete={this.HandleAddDelete}
        />
      </>
    );
  }
}
export default MyComponent;
