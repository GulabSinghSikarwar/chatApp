import React, { useState } from 'react'
import styles from './component.module.css'
import RoomJoinButtonAction from './userVideo/userVideo'
import { useParams, useLocation } from 'react-router-dom'


function RoomDetail() {

  const [enteredRoom, setEnteredRoom] = useState(false)

  const [enteredRoomDetails, setEnteredRoomDetails] = useState("")

  const enteredRoomChangeHandeler = () => {
    setEnteredRoom(true)

  }


  //  setting the room name 
  const enteredRoomDetailsChangeHandeler = (event) => {
    setEnteredRoomDetails(event.target.value)

  }



  return (
    <div className={styles.box}>
      <div className={styles.window}>
        {/*
        if user has not entered room then only show this form to 
      to entered details 
      */}
        {
          (!enteredRoom)
            ?
            (<div>
              <div className={styles.windowHeading}>
                <h4> Video Chat App </h4>


              </div>
              <div className={styles.inputContainer}>

                <div>
                  <input onChange={enteredRoomDetailsChangeHandeler} placeholder={'Enter room name here............'} type={'text'} />

                </div>
              </div>
              <div className={styles.enterRoomButtonContainer}>
                Enter Room
              </div>
            </div>
            )

            :
            (<></>)
        }

        {/*  this will  get the room details and  will redirect to the  joining  meet link  */}
        <RoomJoinButtonAction enteredRoomDetails={enteredRoomDetails} enteredRoom={enteredRoom} enteredRoomChangeHandeler={enteredRoomChangeHandeler} />

      </div>
    </div>
  )
}

export default RoomDetail
