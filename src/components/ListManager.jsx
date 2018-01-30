import React from 'react';
import List from './List.jsx';

class ListManager extends React.Component {
  state = {items: [], newItemText: ''};

  onChange = (e) => {
    this.setState({newItemText: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText: ''});
  };

  render() {
    const divStyle = { marginTop: '10px'};
    const headingStyle = {};

    if(this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
    }
    return (
      <div style={divStyle} className='col-sm-4'>
        <div className='panel panel-primary'>
          <div style={headingStyle} className='panel-heading'>
          <h3>{this.props.title}</h3>
          </div>
          <div className='row panel-body'>
            <form onSubmit={this.handleSubmit}>
              <div className='col-sm-9'>
                <input className='form-control' onChange={this.onChange} value={this.state.newItemText} />
              </div>
              <div className='col-sm-2'>
                <button className='btn btn-primary'>Add</button>
              </div>
            </form>
          </div>
          <div className='row'>
              <List items={this.state.items} />
          </div>
        </div>
      </div>

    );
  }
}

module.exports = ListManager;
