import React from 'react'
import Global from './Main.module.css'


function MainContent() {
return (
    <div className={Global.pageone}>
        <div className={Global.conttext}>
            <h1>Take out your phone, and teach</h1>
            <p>Classcamp is the easiest way to create an online course</p>
        </div>
        <div className={Global.btn}>
            <div className={Global.ahref}>
            <button className={Global.knopka} >
                <p >Create a course</p>
                <img src="/Vector.png" alt="vector" />
            </button>
        
        </div>
        <div className={Global.textDown}>
            <p>If you're a student, continue here</p>
        </div>
        </div>
        <div className={Global.mainImg}>
            <img src="./mainimg2.png" alt="phone" />
            
            
            
        
        </div>
        
    </div>
)
}

export default MainContent;
