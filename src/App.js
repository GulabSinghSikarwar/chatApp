import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { io } from 'socket.io-client'
import RoomDetail from './components/roomDetail';
import { useRef } from 'react';
import { setSocket } from './components/stateManagement/slices/socketSlice'
import { useDispatch } from 'react-redux'
import UserRoutes from './routes/routes';
// import { getDefaultMiddleware} from '@reduxjs/toolkit'
let  socket = io.connect('http://localhost:5000/')
function App() {
  // const customizedMiddleware =getDefaultMiddleware({
  //   serializableCheck:false
  // })

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(socket);
    dispatch(setSocket(socket))

    console.log("effect");
  }, [])
  console.log("after");

  // }, [])
  return (
    <div className='body' >
      
      <UserRoutes/>
      {/* {stream &&  <video playsInline muted ref={video} autoPlay style={{ width: "300px" }} />} */}

    </div>
  );
}

export default App;
