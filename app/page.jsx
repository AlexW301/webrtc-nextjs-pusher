"use client"
import Link from "next/link";
import {StateContext, useStateContext} from "../context/StateContext";

export default function Home() {
  const {roomName, setRoomName, userName, setUserName, handleLogin, handleCredChange} = useStateContext(StateContext);

  return (
    <>
      <form onSubmit={handleLogin}>
       <h1>Lets join a room!</h1>
       <input onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="Enter Username" />
       <input onChange={(e) => setRoomName(e.target.value)} value={roomName} placeholder="Enter Room Name"/>
       <Link href={`/meeting-room/${roomName}`} >Join Room</Link>
      </form>
    </>
  );
}