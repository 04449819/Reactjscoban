import React from "react";

class DisplayInfor extends React.Component {
  state = {
    hideshow: false,
  };

  HandleShowHide() {
    this.setState({
      hideshow: !this.state.hideshow,
    });
  }

  HandleOclickDelete(id) {
    this.props.HandleAddDelete(id);
  }
  render() {
    const { hideshow } = this.state;
    const { listUsers } = this.props;
    return (
      <>
        <div>
          <button onClick={() => this.HandleShowHide()}>
            {hideshow === true ? "Hide" : "Show"}
          </button>
        </div>
        {hideshow && (
          <div>
            {listUsers.map((user) => {
              return (
                <div
                  key={user.id}
                  className={+user.age >= 30 ? "red" : "green"}
                >
                  <div>My name is {user.name}</div>
                  <div>i'm {user.age}</div>
                  <div>i from to {user.address}</div>
                  <button onClick={() => this.HandleOclickDelete(user.id)}>
                    Xoa
                  </button>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default DisplayInfor;
