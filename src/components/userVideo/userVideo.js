import React, { useRef, useState, useEffect } from 'react'

import styles from './userVideo.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import RoomDetail from '../roomDetail'
import { useSelector } from 'react-redux'

function RoomJoinButtonAction({ enteredRoomDetails, enteredRoom, enteredRoomChangeHandeler }) {

    const navigate = useNavigate()
    const location = useLocation()
    const path = location.pathname;
    const socket = useSelector((state) => {
        return state.socketSlice.socket;

    })








    const enterRoomActionHandeler = () => {

        //  first check th room name length , if it is valid
        //  then only proceed 


        if (enteredRoomDetails.trim().length <= 5) {
            alert("room  name must be of atlest 5 character ")
            return;

        }
        enteredRoomChangeHandeler()

        console.log("path: ", path);
        const newPath = `${path}/meet/${enteredRoomDetails}`

        navigate(newPath)


    }




    return (
        <div className={styles.userVideoOuterContainer} >

            <div className={styles.userVideoInternelContainer}>
                <div className={styles.buttonAndVideoContainer}>
                    <div className={styles.enterRoomButtonContainer}>
                        <button onClick={enterRoomActionHandeler} className={styles.enterRoomButton}>
                            Enter Room
                        </button>

                    </div>


                </div>

            </div>



        </div>
    )
}

export default RoomJoinButtonAction
