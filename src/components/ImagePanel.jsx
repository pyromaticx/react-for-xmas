var React = require('react');
var InfoPane = require('./ImagePanelInfoPane.jsx')

var ImagePanel = React.createClass({
  render: function() {
    // Inline styles for ImagePanel
    var containerStyle = {
      borderRadius: '10',
      background: 'burlywood',
      padding: '0',
      marginTop: '30',
      minHeight: '350',
      maxHeight: '350',
      overflow: 'hidden',
      textAlign: 'center',
      backgroundImage: '',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    // if an image was passed in, use it
    if(this.props.imgSrc) {
      containerStyle.backgroundImage = 'url(' + this.props.imgSrc + ')';
    }
    // styles for info panels
    var infoStyle = {
      //background: 'rgba(100,100,100,0.5)',
      backgroundImage: 'radial-gradient(ellipse, rgba(100,100,100,0.6) 0%, rgba(100, 100, 100, 0.1) 100%)',
      height: '300',
      marginTop: '230',
    };
    // if topPanel is set to true, place panels on top of image pane
    if (this.props.topPanel) {
      infoStyle.marginTop = '0';
      infoStyle.height = '110';
    }
    return (
      <div style={containerStyle} className='col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1'>
        <div style={infoStyle} className="container-fluid col-md-12">
          <div className="row">
            <div className="col-xs-4">
              <InfoPane content={this.props.valueLeft} />
            </div>
            <div className="col-xs-4">
              <InfoPane content={this.props.valueMiddle} />
            </div>
            <div className="col-xs-4">
              <InfoPane content={this.props.valueRight} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ImagePanel;
