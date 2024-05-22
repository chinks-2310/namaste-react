import React from "react";

class UserClass extends React.Component {
  // Constructor will receive props
  constructor(props) {
    super(props); // this things basically allows accessing this.props in a Constructor function. It calls the constructor of the parent class.
    // console.log(this.props.name + "Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "India",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("Child Component did Mount");
    const data = await fetch("https://api.github.com/users/chinks-2310");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component did update called");
  }

  componentWillUnmount() {
    console.log("Component unmount called");
  }

  render() {
    // console.log("Child Render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo?.avatar_url}></img>
        <h2>Name: {this.state.userInfo?.name}</h2>
        <h3>
          Location:{" "}
          {this.state.userInfo?.location
            ? this.state.userInfo?.location
            : "India"}
        </h3>
        <h4>Contact: @Chintan85112994</h4>
      </div>
    );
  }
}

export default UserClass;


/**
 * Parent Constructor
  - Parent Render
      - First Constructor
      - First Render

      - Second Constructor
      - Second Render

      <DOM updated in SINGLE BATCH>

      - First ComponentDidMount()
      - Second ComponentDidMount()

  - Parent ComponentDidMount()

 */


/**
 * Mounting Life Cycle
 *    Constructor is called.
 *    Render is called. Render happens with dummy data.
 *    <HTML DUMMY Data>
 *    Component did mount is called. API Call inside the component did mount. After API calls response returns the response we set the state
 *
 * --- UPDATE
 *     Render (API Data)
 *     <HTML (new API Data) />
 *     It will call componentDidUpdate.
 *
 */

/**
 * -----  Mounting -----
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component did Mount
 *      <API call>
 *      <this.setState>
 * 
 * ----- Update  -----
 * Render (API Data)
 * <HTML (new API data)>
 * 
 * Component Did Update
 */
