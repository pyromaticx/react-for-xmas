var React = require('react');

var InfoPanel = React.createClass({
  componentWillMount:function() {
    this.setState({opacity:'0.5'})
  },
  handleClick:function() {
    alert("You clicked on: " + this.props.heading);
  },
  handleMouseOver: function() {
    this.setState({opacity: '1'})
  },
  handleMouseLeave: function() {
    this.setState({opacity: '0.5'})
  },
  render: function() {
    var divStyle = {
      boxShadow: '0 2px 20px 2px rgba(100,100,100,0.2), inset 0 2px 20px 2px rgba(100,100,100,0.1)',
      borderRadius: '10',
      textAlign: 'center',
      marginTop: '20',
      background: 'white',
      opacity: this.state.opacity
    };
    if (this.props.background) {
      divStyle.background = this.props.background;
    }
    if(this.props.height) {
      divStyle.height = this.props.height;
    }

    var headingStyle = {
      marginTop: '25',
      fontFamily: "Lobster",
      color: '#777'
    };
    if(this.props.headingBackground) {
      headingStyle.background = this.props.headingBackground;
    }

    var contentStyle = {
      marginBottom: '35',
      fontFamily: 'Helvetica',
      fontStyle: 'bold',
      fontSize: '18',
      color: '#777'
    };
    if(this.props.contentColor) {
      contentStyle.color = this.props.contentColor;
    }

    return (
      <div onClick={this.handleClick}
           onMouseOver={this.handleMouseOver}
           onMouseLeave={this.handleMouseLeave}
           style={divStyle}
           className={this.props.size || "col-xs-10 col-sm-4 col-md-3 col-xs-offset-1 col-sm-offset-0 col-md-offset-1"}>

          <div style={headingStyle} className="col-sm-12">
              <h3>{this.props.heading}</h3>
          </div>
          <div style={contentStyle} className="col-sm-12">
              <p>{this.props.content}</p>
          </div>

      </div>
    )
  }
});

module.exports = InfoPanel;
