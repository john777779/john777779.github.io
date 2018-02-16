import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Some Film',
      description: 'blabla',
      rating: 5
    };

    this.change_prop = this.change_prop.bind(this);
  };

  change_prop(event) {
    const kind = event.target.getAttribute('kind');
    let newState = {};
    newState[kind] = event.target.value.substr(0,1).toUpperCase() + event.target.value.substr(1);

    this.setState(newState);

  }

  render() {
    return (
      <div>
        <div>
          <input type="text" kind="name" value={this.state.name} onChange={this.change_prop} />
        </div>
        <div>
          <textarea rows="3" cols="30" name="description" type="text" kind="description" value={this.state.description} onChange={this.change_prop} />
        </div>
        <div>
          <select type="text" kind="rating" value={this.state.rating} onChange={this.change_prop}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <h1>Name:</h1>
          <p>{this.state.name}</p>
        </div>
        <div>
          <h1>Description:</h1>
          <p>{this.state.description}</p>
        </div>
        <div>
          <h1>Rating:</h1>
          <p>{this.state.rating}</p>
        </div>
      </div>
    );
  }
}

export default App;
