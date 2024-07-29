// import UserTable from '../src/components/Table/UserTable';
// import AddForm from '../src/components/Form/AddForm';
// import { deleteUser, editUser, addUser, getallUsers } from '../src/services/api';
// import React, { useEffect, useState } from 'react';
// import { Switch, Route } from "react-router-dom";

import User from "../src/components/User/user";
import Login from "./components/loginForm/login";
import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
// const App = () => {


//   return (

//     // <Router>
//     //   {/* <User />
//     //   <Login /> */}
//     //   <Route exact path="/" component={Login} />
//     //   <Route path="/user" component={User} />
//     // </Router>
//     <Routes>
//       {/* <Switch> */}
//       <Route exact path="/" component={Login} />
//       <Route path="/user" component={User} />
//       {/* </Switch> */}
//     </Routes>

//   );
// }

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Login /> },
    { path: '/user', element: <User /> },
  ]);
}

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

// json-server --watch db.json --port 8000
