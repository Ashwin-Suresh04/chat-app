import { useRef, useState } from "react";
import {auth} from './firebase-config';
import { signOut } from 'firebase/auth';
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import './styles/Room.css';
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signUserOut =  async () => {
    await signOut(auth);
    cookies.remove("auth-token")
    setIsAuth(false);
    setRoom(null);
  }

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div className="container">
      {room ? (
        <div>
          <Chat room={room} />
        </div>
      ) : (
        <div className="roomroot">
        <div className="room">
          <h1>One Step Away</h1>
          <label>Enter/Create Room Name </label>
          <input ref={roomInputRef} />
          <button className="enter" onClick={() => setRoom(roomInputRef.current.value)}>
            Enter
          </button>
        </div>
        </div>
      )}
      <div className="sign-out">
        <button className="signout" onClick={signUserOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;
