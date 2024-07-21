import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler() {
        console.log("Clicked the button");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventsClass