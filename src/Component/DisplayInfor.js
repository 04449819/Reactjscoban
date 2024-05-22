import React, { useState } from "react";

// class DisplayInfor extends React.Component {
// state = {
//   hideshow: false,
// };

// HandleShowHide() {
//   this.setState({
//     hideshow: !this.state.hideshow,
//   });
// }

//   render() {
//     // const { hideshow } = this.state;
//     const { listUsers } = this.props;
//     return (
//       <>
//         {/* <div>
//           <button onClick={() => this.HandleShowHide()}>
//             {hideshow === true ? "Hide" : "Show"}
//           </button>
//         </div> */}
//         {true && (
//           <div>
//             {listUsers.map((user) => {
//               return (
//                 <div
//                   key={user.id}
//                   className={+user.age >= 30 ? "red" : "green"}
//                 >
//                   <div>My name is {user.name}</div>
//                   <div>i'm {user.age}</div>
//                   <div>i from to {user.address}</div>
//                   <button onClick={() => this.HandleOclickDelete(user.id)}>
//                     Xoa
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </>
//     );
//   }
// }
// const HandleOclickDelete = (props, id) => {
//   // alert("clink me");
//   props.HandleAddDelete(id);
// };

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [hideshow, SetShowHide] = useState(false);

  const HandleShowHide = () => {
    // alert("clink me");
    SetShowHide(!hideshow);
  };

  const HandleOclickDelete = (id) => {
    // alert("clink me");
    props.HandleAddDelete(id);
  };

  return (
    <>
      <div>
        <button onClick={() => HandleShowHide()}>
          {hideshow === true ? "Hide" : "Show"}
        </button>
      </div>
      {hideshow && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age >= 30 ? "red" : "green"}>
                <div>My name is {user.name}</div>
                <div>i'm {user.age}</div>
                <div>i from to {user.address}</div>
                <button onClick={() => HandleOclickDelete(user.id)}>Xoa</button>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DisplayInfor;
