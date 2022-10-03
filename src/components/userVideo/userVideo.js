import React, { useRef, useState, useEffect } from 'react'

import styles from './userVideo.module.css'

import { useSelector } from 'react-redux'

function UserVideo({ enteredRoomDetails, enteredRoom, enteredRoomChangeHandeler }) {


    const myVideo = useRef();

    const [stream, setStream] = useState()
    const socket = useSelector((state) => {
        return state.socketSlice.socket

    })



    const constraints = {
        audio: true,
        video: {
            width: 500,
            height: 300
        }
    }
    const getUserMedia = () => {
        if (enteredRoomDetails.length === 0) {
            alert("room name cannot be blank")
            return
        }

        alert(" emmiting join event ")


        // socket.emit("join",enteredRoomDetails);
        socket.emit('join', enteredRoomDetails)

        enteredRoomChangeHandeler()
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
            setStream(stream)
        })
    }
    useEffect(() => {

        if (!stream) {
            myVideo.current = { srcObj: null }

        }
        else {
            myVideo.current.srcObject = stream



        }


    }, [stream])






    return (
        <div className={styles.userVideoOuterContainer} >

            <div className={styles.userVideoInternelContainer}>
                <div className={styles.buttonAndVideoContainer}>

                    {
                        (!enteredRoom)
                            ?
                            (<div className={styles.enterRoomButtonContainer}>
                                <button onClick={getUserMedia} className={styles.enterRoomButton}>
                                    Enter Room
                                </button>

                            </div>
                            )
                            :
                            (
                                <></>
                            )
                    }
                    <div className={styles.myVideoContainer}>
                        {stream && <video className={styles.myVideo} muted ref={myVideo} autoPlay />}

                    </div>
                </div>

            </div>



        </div>
    )
}

export default UserVideo
