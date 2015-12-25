var React = require('react');

// can set heading, or content via props or pass in one string seperated by a |
// and component will split the first into the heading and second into the content
var infoPane = React.createClass({
  componentWillMount: function() {
    var data = this.props.content.split('|');
    this.setState({paneTitle: data[0]});
    this.setState({paneContent: data[1]});
    this.setState({textShadow: '5px 5px 5px rgba(033,033,033,0.3)'});
  },
  handleClick: function() {
    alert("You clicked on: " + this.state.paneTitle);
  },
  handleMouseOver: function() {
    this.setState({textShadow: '0 5px 10px rgba(200,200,200,0.7)'});
  },
  handleMouseLeave: function() {
    this.setState({textShadow: '5px 5px 5px rgba(033,033,033,0.3)'});
  },
  render: function() {
    // inline styles
    var divStyle = {
      textShadow: this.state.textShadow,
      borderRadius: '10'
    };
    var headingStyle = {
      fontFamily: 'Helvetica',
      color: 'rgba(255,255,255,0.9)'
    };
    var contentStyle = {
      fontStyle: 'bold',
      color: 'white',
      textShadow: '5px 5px 5px rgba(033,033,033,0.7)'
    };

    return (
      <div onClick={this.handleClick}
           onMouseOver={this.handleMouseOver}
           onMouseLeave={this.handleMouseLeave}
           style={divStyle}>
      <h3 style={headingStyle}>{this.state.paneTitle}</h3>
      <p style={contentStyle}>{this.state.paneContent}</p>
      </div>
    );
  }
});

module.exports = infoPane;
