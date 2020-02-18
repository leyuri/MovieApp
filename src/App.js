import React from 'react';
import axios from "axios";
//axios.. 겉면의 layer와 같은...


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json")
  };

  componentDidMount() {
    this.getMovies();
 }

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}


export default App;
 