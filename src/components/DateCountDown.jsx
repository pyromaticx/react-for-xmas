import React from 'react';

class DateCountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {targetDate: Date.parse(props.targetDate)};
    this.dateNow = setInterval(() => this.tick(), 1000);
  }

  tick() {
    // finds the days remaining, then removes that amount of time from
    // timeRemaining, then does the same with hours, min, secs
    let timeRemaining = this.state.targetDate - Date.now();
    const  days = Math.floor(timeRemaining / 86400000);
    timeRemaining -= (days * 86400000);
    const hours = Math.floor(timeRemaining / 3600000);
    timeRemaining -= (hours * 3600000);
    const minutes = Math.floor(timeRemaining / 60000);
    timeRemaining -= (minutes * 60000);
    const seconds = Math.floor(timeRemaining / 1000);
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      targetDate: this.state.targetDate
    });
  }

  render() {
    //inline styles
    let timerStyle = {
      background: 'transparent',
      fontSize: '10px',
      textAlign: 'center'
    };
    return (
      <div style={timerStyle} className='container-fluid'>
        <div className='row'>
          <div className='col-xs-3'>
            <h2>{this.state.days}</h2>
            <p>DAYS</p>
          </div>
          <div className='col-xs-3'>
            <h2>{this.state.hours}</h2>
            <p>HOURS</p>
          </div>
          <div className='col-xs-3'>
            <h2>{this.state.minutes}</h2>
            <p>MINUTES</p>
          </div>
          <div className='col-xs-3'>
            <h2>{this.state.seconds}</h2>
            <p>SECONDS</p>
          </div>
        </div>
        <div className="row">
          <h4>{this.props.countDownTitle}</h4>
        </div>

      </div>
    );
  }
}

export default DateCountDown;
