import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component did Mount");
    // Api call
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Chintan Thakkar (function)"} /> */}
        <UserClass
          name={"Chintan Thakkar (class)"}
          location={"Palanpur (class)"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User name={"Chintan Thakkar (function)"} /> */}
//       <UserClass
//         name={"Chintan Thakkar (class)"}
//         location={"Palanpur (class)"}
//       />
//     </div>
//   );
// };

export default About;
