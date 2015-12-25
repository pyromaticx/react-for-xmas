var React = require('react');
var InfoPanel = require('./InfoPanel.jsx');
var DateCountDown = require('./DateCountDown.jsx');

var Header = React.createClass({
  render: function() {
    var brandLogo = this.props.brandImg || './img/santa.png';
    var logoStyle = {
      backgroundImage: 'url(./img/santa.png)',
      height: '100',
      width: "100",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginTop: '30'
    };

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar header'>
            <div className='row'>
              <div className="col-xs-12 col-sm-1 col-sm-1 col-sm-offset-1">
                <div style={logoStyle} className="container-fluid"></div>
              </div>
              <div className="col-xs-12 col-sm-8 col-sm-offset-1">
                <DateCountDown
                  targetDate="December 25, 2016 00:00:00"
                  countDownTitle="'Till Christmas!"/>
              </div>

            </div>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
