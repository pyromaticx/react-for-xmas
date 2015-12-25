var React = require('react');

var DateCountDown = React.createClass({
  componentWillMount: function() {
    // parses target date into millis
    this.setState({targetDate: Date.parse(this.props.targetDate)});
    // sets clock update interval
    var dateNow = setInterval(this.tick, 1000);
    // calls the tick function to update clock on init. Had to use setInterval
    // because sync function was calling setState before defined?
    var initTimer = setTimeout(this.tick, 0);
  },
  tick: function() {
    // finds the days remaining, then removes that amount of time from
    // timeRemaining, then does the same with hours, min, secs
    var timeRemaining = this.state.targetDate - Date.now();
    var days = Math.floor(timeRemaining / 86400000);
    timeRemaining -= (days * 86400000);
    var hours = Math.floor(timeRemaining / 3600000);
    timeRemaining -= (hours * 3600000);
    var minutes = Math.floor(timeRemaining / 60000);
    timeRemaining -= (minutes * 60000);
    var seconds = Math.floor(timeRemaining / 1000);
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  },
  render: function() {
    //inline styles
    var timerStyle = {
      background: 'transparent',
      fontSize: '10',
      textAlign: 'center',
      fontSize: '8'
    }
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
});

module.exports = DateCountDown;
