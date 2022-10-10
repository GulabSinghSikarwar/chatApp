import React, { useEffect, useState, useRef } from 'react'
import styles from './UserMediaContainer.module.css'

function UserMediaContainer() {

    const [stream, setStream] = useState(null);
    const userMedia = useRef()
    useEffect(() => {


        if (!stream) {


            userMedia.current = { srcObject: null }

            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
                setStream(stream);



            }).catch((error) => {
                console.log("some error in fetching user : ", error.message);

            })

        }

        else {

            userMedia.current.srcObject = stream;



        }

        return () => {
            if (stream!==null) {
                const tracks = stream.getTracks();
                tracks.forEach(element => {
                    element.stop()
                });
            }
            console.log(" cleanup is called ");
        }


    }, [stream])


    console.log("comp");

    return (
        <div>
            {stream && <video className={styles.myVideo} muted ref={userMedia} autoPlay />}


        </div>
    )
}

export default UserMediaContainer
