import React, { useState } from "react";

// class UserInfor extends React.Component {
//   state = {
//     name: "",
//     age: 0,
//     address: "",
//   };

//   HandleOnsubmit(event) {
//     event.preventDefault(); // preventDefault ngan hanh dong load lai trang
//     let user = {
//       id: Math.floor(Math.random() * 1000),
//       name: this.state.name,
//       address: this.state.address,
//       age: this.state.age,
//     };
//     this.props.HandleAdd(user);
//   }

//   HandleOnchangeName(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }

//   HandleOnchangeAge(event) {
//     this.setState({
//       age: event.target.value,
//     });
//   }

//   HandleOnchangeAdress(event) {
//     this.setState({
//       address: event.target.value,
//     });
//   }

//   // vi trong class component nen khi khai bao can them thuoc tinh this.
//   render() {
//     const { name, age, address } = this.state;
//     return (
//       <>
//         <h1>
//           my name is {name} i'm {age} year old i from to {address}
//         </h1>
//         <form onSubmit={(event) => this.HandleOnsubmit(event)}>
//           <div>
//             <label>Ho va Ten</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(event) => this.HandleOnchangeName(event)}
//             />
//           </div>
//           <div>
//             <label>Tuoi</label>
//             <input
//               type="text"
//               value={age}
//               onChange={(event) => this.HandleOnchangeAge(event)}
//             />
//           </div>
//           <div>
//             <label>Dia chi</label>
//             <input
//               type="text"
//               value={address}
//               onChange={(event) => this.HandleOnchangeAdress(event)}
//             />
//           </div>
//           <button>submit</button>
//         </form>
//       </>
//     );
//   }
// }
const UserInfor = (props) => {
  const [Userstate, setUserstate] = useState({
    name: "",
    age: 0,
    address: "",
  });

  const { name, age, address } = Userstate;

  const HandleOnsubmit = (event) => {
    event.preventDefault(); // preventDefault ngan hanh dong load lai trang
    let user = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      address: address,
      age: age,
    };

    console.log(user);
    props.HandleAdd(user);
  };

  const HandleOnchangeName = (event) => {
    let name = event.target.value;
    setUserstate((user) => {
      return { ...user, name };
    });
  };

  const HandleOnchangeAge = (event) => {
    let age = event.target.value;
    setUserstate((user) => {
      return { ...user, age };
    });
  };

  const HandleOnchangeAdress = (event) => {
    let address = event.target.value;
    setUserstate((user) => {
      return { ...user, address };
    });
  };

  return (
    <>
      <h1>
        my name is {name} i'm {age} year old i from to {address}
      </h1>
      <form onSubmit={(event) => HandleOnsubmit(event)}>
        <div>
          <label>Ho va Ten</label>
          <input
            type="text"
            value={name}
            onChange={(event) => HandleOnchangeName(event)}
          />
        </div>
        <div>
          <label>Tuoi</label>
          <input
            type="text"
            value={age}
            onChange={(event) => HandleOnchangeAge(event)}
          />
        </div>
        <div>
          <label>Dia chi</label>
          <input
            type="text"
            value={address}
            onChange={(event) => HandleOnchangeAdress(event)}
          />
        </div>
        <button>submit</button>
      </form>
    </>
  );
};
export default UserInfor;
