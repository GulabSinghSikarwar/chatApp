import React, { useEffect, useState, useRef } from 'react'
import styles from './UserMediaContainer.module.css'

function UserMediaContainer() {

    const [stream, setStream] = useState();
    const userMedia = useRef()
    useEffect(() => {

        if(!stream)
        userMedia.current={srcObject:null}

        else{

            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
                setStream(stream);
                userMedia.current = {}
                userMedia.current = { srcObject: stream };
                
                
            }).catch((error) => {
                console.log("some error in fetching user : ", error.message);
                
            })
        }


    }, [stream])

    return (
        <div>
                { stream && <video className={styles.myVideo}  muted ref={userMedia} autoPlay />}

      
        </div>
    )
}

export default UserMediaContainer
