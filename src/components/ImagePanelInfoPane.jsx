import React from 'react';

// can set heading, or content via props or pass in one string seperated by a |
// and component will split the first into the heading and second into the content
class ImagePanelInfoPane extends React.Component {
  constructor(props) {
    super(props);
    const data = this.props.content.split('|');
    this.state = {
      paneTitle: data[0],
      paneContent: data[1],
      textShadow: '5px 5px 5px rgba(033,033,033,0.3)'
    };
  }

  handleClick() {
    alert(`You clicked on: ${this.state.paneTitle}`);
  }

  handleMouseOver() {
    this.setState({textShadow: '0 5px 10px rgba(200,200,200,0.7)'});
  }

  handleMouseLeave() {
    this.setState({textShadow: '5px 5px 5px rgba(033,033,033,0.3)'});
  }

  render() {
    // inline styles
    const divStyle = {
      textShadow: this.state.textShadow,
      borderRadius: '10px'
    };
    const headingStyle = {
      fontFamily: 'Helvetica',
      color: 'rgba(255,255,255,0.9)'
    };
    const contentStyle = {
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
}

export default ImagePanelInfoPane;
