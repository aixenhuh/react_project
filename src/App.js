import React, { Component } from 'react';
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoList';

class App extends Component {
  id = 0;
  state = {
    information : []
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat({
        ...data,
        id : this.id++
      })
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState ({
      information : information.filter( info => info.id !== id )
    })    
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList data={this.state.information} onRemove={this.handleRemove}></PhoneInfoList>
      </div>
    );
  }
}

export default App;