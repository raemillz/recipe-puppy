import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  state = {
    searchText: '',
    typing: false,
    typingTimeout: 0
  };

  onSearchChange = (event) => {
    const self = this;

    if (self.state.typingTimeout) {
       clearTimeout(self.state.typingTimeout);
    }

    self.setState({
       searchText: event.target.value,
       typing: false,
       typingTimeout: setTimeout(function () {
           self.sendToParent(self.state.searchText);
         }, 3000)
    });
  }

  sendToParent = () => {
    this.props.onSearch(this.query.value);
  }




    render() {
      return (
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search">Search</label>
            <input type="search"
              onChange={this.onSearchChange}
              name="search"
              ref={(input) => this.query = input}
              placeholder="Search..." />
        </form>
      );
    }
}
