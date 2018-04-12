import React from 'react';
import Form from './components/form';
import List from './components/list';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  
  addContacts(text) {
    //console.log(text)
    const contact = {name: text.name, address: text.address}
    //console.log(contact)
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  render() {
    return (
      <div>
        <Form add={(value) => this.addContacts(value)}/>
        <List users={this.state.contacts} />
      </div>
    )
  }
}