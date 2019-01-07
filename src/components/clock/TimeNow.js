import React, { Component } from 'react'
import moment from 'moment'
import { view, store } from 'react-easy-state'

class TimeNow extends Component {
  // create a local store ## (replace utc() with local())
  clock = store({
    id: setInterval(() => this.setTime(), 1000),
    time: moment()
      .local()
      .format("dddd, MMMM Do YYYY, h:mm:ss A")
  });

  // the clock store can be manipulated as a plain JS object
  setTime () {
    this.clock.time = moment()
      .local()
      .format("dddd, MMMM Do YYYY, h:mm:ss A")
  }

  // clean up the timer before the component is unmounted
  componentWillUnmount () {
    clearInterval(this.clock.id)
  }

  // render is automatically triggered whenever this.clock.time changes
  render () {
    return <div>Local Date & Time is: {this.clock.time}</div>
  }
}

// wrap the component with view() before exporting it
export default view(TimeNow)