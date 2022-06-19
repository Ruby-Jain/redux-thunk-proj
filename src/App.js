import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./components/User";
import "./App.css"
import LinearProgress from '@mui/material/LinearProgress';

import { userAction } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>REDUX THUNK APP</h1><br/>
      <h2>FETCHED DATA OF ALL THE USERS</h2><br />
      <LinearProgress />
      
      {loading ? (
        <h2>Loading ....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User users={users} />
      )}
    </div>
  );
}

export default App;
