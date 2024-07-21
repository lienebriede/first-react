import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log("Clicked the button");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default EventsFunctional