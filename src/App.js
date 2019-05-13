import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

import Login from './components/auth/Login';
import Search from './components/home/Search';
import SearchResults from './components/home/SearchResults';
import PageNotFound from './components/PageNotFound';

import store from './store/ConfigureStore'

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Search} exact />
          <Route path='/login' component={Login} />
          <Route path='/search' component={Search} />
          <Route path='/search-results' component={SearchResults} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}


export default App;
