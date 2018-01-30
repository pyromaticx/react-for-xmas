import React from 'react';
import ImagePanelInfoPane from './ImagePanelInfoPane.jsx';

const ImagePanel = ({imgSrc, topPanel, valueLeft, valueMiddle, valueRight}) => {
  // Inline styles for ImagePanel
  const containerStyle = {
    borderRadius: '10px',
    background: 'burlywood',
    padding: '0',
    marginTop: '30px',
    minHeight: '350px',
    maxHeight: '350px',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  // if an image was passed in, use it
  if (imgSrc) {
    containerStyle.backgroundImage = 'url(' + imgSrc + ')';
  }
  // styles for info panels
  const infoStyle = {
    //background: 'rgba(100,100,100,0.5)',
    backgroundImage: 'radial-gradient(ellipse, rgba(100,100,100,0.6) 0%, rgba(100, 100, 100, 0.1) 100%)',
    height: '300px',
    marginTop: '230px',
  };
  // if topPanel is set to true, place panels on top of image pane
  if (topPanel) {
    infoStyle.marginTop = '0';
    infoStyle.height = '110px';
  }
  return (
    <div style={containerStyle} className='col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1'>
      <div style={infoStyle} className="container-fluid col-md-12">
        <div className="row">
          <div className="col-xs-4">
            <ImagePanelInfoPane content={valueLeft} />
          </div>
          <div className="col-xs-4">
            <ImagePanelInfoPane content={valueMiddle} />
          </div>
          <div className="col-xs-4">
            <ImagePanelInfoPane content={valueRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePanel;
