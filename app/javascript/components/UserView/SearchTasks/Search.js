import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  getInfo = () => {
    axios.get('/tasks')
    .then(({ data }) => {
      this.setState({
        results: data.data
      })
    })
  }

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
       <Suggestions results={this.state.results} />
     </form>
   )
 }
}

export default Search