import React from 'react'
import Lessons from './Lessons.module.css'


function SecondContent() {
return (
    <div className={Lessons.Container}>
        <div className={Lessons.text}>
            <h1>Shoot lessons <br /> 
            with your phone</h1>
            <p>Pick a course template, and let the 
                <br />app guide you through the shooting. 
                <br /> It's as easy as that.</p>
        </div>
    </div>
)
}
export default SecondContent;
