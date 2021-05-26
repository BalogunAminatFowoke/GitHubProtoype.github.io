import React from 'react';
import HomePage from './Components/Homepage/homepage';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      userInformation:{},
      repositories: [],
      activity: [],
      searchField: "",
    }
  }

    componentDidMount(){
        axios.get ('https://api.github.com/users/jeafreezy')
          .then(user => this.setState({ userInformation: user.data}))

            axios.get ('https://api.github.com/users/jeafreezy/repos')
            .then(userRepo => this.setState({ repositories: userRepo.data}))

            axios.get ('https://api.github.com/users/jeafreezy/events')
            .then(userActvity => this.setState({ activity: userActvity.data}))
    }

    onSearchChange=(event) =>{
      this.setState({searchField: event.target.value})
    }


  render(){
    const filteredRepo =  this.state.repositories.filter( repo => {
        return( repo.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
      })

    return(
      <div>
      <Header/>
      <HomePage 
          account={this.state.userInformation}  
          repo={filteredRepo} 
          activity={this.state.activity}
          searchChange ={this.onSearchChange}
        />
        
    </div>
    )
  }
}

export default App;