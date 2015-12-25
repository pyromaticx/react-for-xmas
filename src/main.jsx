var React = require('react');
var ReactDOM = require('react-dom');
var InfoPanel = require('./components/InfoPanel.jsx');
var ImagePanel = require('./components/ImagePanel.jsx');
var Header = require('./components/Header.jsx');

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<InfoPanel
  heading="Earnings"
  content="$ 320.19"
  background="rgba(110,220,110,0.5)"
  contentColor="white"/>, document.getElementById('earnings'));
ReactDOM.render(<InfoPanel
  size="col-xs-10 col-xs-offset-1"
  heading="Clicks"
  content="1145"/>, document.getElementById('clicks'));
ReactDOM.render(<InfoPanel
  heading="Impressions"
  content="346789"/>, document.getElementById('impressions'));
ReactDOM.render(<InfoPanel
  heading="Users"
  content="34689"/>, document.getElementById('users'));
ReactDOM.render(<ImagePanel
  imgSrc="img/tree.jpg"
  valueLeft="Stuff|This is some stuff"
  valueMiddle="React Components|Lorem ipsum text"
  valueRight="Christmas|get that kajigger youve been wanting"/>, document.getElementById('imageinfo1'));
ReactDOM.render(<ImagePanel
  topPanel={true}
  imgSrc="img/thesenuts.jpg"
  valueLeft="TINY|small random stuff"
  valueRight="Other Points|Here they are"
  valueMiddle="Order|I did those out of" />, document.getElementById('imageinfo2'))
