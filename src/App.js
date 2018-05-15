// import React, { Component } from "react";
// import "./App.css";
// import Login from "./Components/Login";
// //import SignUp from "./Components/SignUp";
// import { Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   componentDidMount() {
//     axios
//       .post("/user/1")
//       .then(response => {
//         console.log(response.data);
//         this.setState(response.data);
//       })
//       .catch(response => {
//         this.setState({});
//       });
//   }

//   render() {
//     return (
//       <div className="background">
//         <div className="background-container">
//           <div className="shitty-container">
//             <h1 className="buy-or-sell">Buy or Sell</h1>
//             <h1 className="from-text">From</h1>
//           </div>
//           <div className="text-container">
//             <div id="cube" className="animate">
//               <div className="coin">BTC</div>
//               <div />
//               <div className="coin">XRP</div>
//               <div />
//               <div className="coin">ADA</div>
//               <div className="coin">TRX</div>
//             </div>

//             <div id="cube2" className="animate">
//               <div className="coin">LTC</div>
//               <div />
//               <div className="coin">XLM</div>
//               <div />
//               <div className="coin">XRP</div>
//               <div className="coin">ENG</div>
//             </div>
//           </div>
//           <button className="login-button">
//             <Route path="/Login" component={Login} />
//           </button>
//           <a className="create-account">Create Account</a>
//         </div>
//         {/* <div className="background-container">
//           <div> <Login /></div>
//         </div> */}
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// const Title = () => {
//   return (
//     <div className="title">
//       <h1>React Router demo</h1>
//       <Link to="/list">
//         <button>Show the List</button>
//       </Link>
//     </div>
//   );
// };
// const List = () => {
//   return (
//     <div className="nav">
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//       <Link to="/">
//         <button>Back Home</button>
//       </Link>
//     </div>
//   );
// };
// module.exports = {
//   Title,
//   List
// };
