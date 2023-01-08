"use client"
import Router from "next/router";
import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    Router.push(`/room/${roomName}`);
  };

  const handleCredChange = (userName, roomName) => {
    setUserName(userName)
    setRoomName(roomName)
  }

  return (
    <Context.Provider
      value={{
        userName,
        setUserName,
        roomName,
        setRoomName,
        handleLogin,
        handleCredChange
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
