import React from 'react';

import ListItem from './ListItem.jsx';

class List extends React.Component {
  render() {
    let createItem = function (text, index) {
      return (
        <ListItem key={index + text} text={text} />
      );
    };
    return (
      <ul>{this.props.items.map(createItem)}</ul>
    );
  }
}

export default List;
