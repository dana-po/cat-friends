import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: '',
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({cats:users}))
  }


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filterCats = this.state.cats.filter((cat) => {
      return cat.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
if(this.state.cats.length === 0){
  return <h1>Loading...</h1>
}else{


    return (
      <div className="tc">
        <h1 className="f1">CatFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList cats={filterCats} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}
  }
}
export default App;
