import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import Question from './Question'
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import AuthButton from './AuthButton'
import LoadingBar from 'react-redux-loading'
import Signup from './Signup'
import { useAuth0 } from "../react-auth0-wrapper";




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className=''>
            <Nav user={this.props.authedUser} />
            {this.props.loading === true
              ? null
              : <div>
                  <PrivateRoute path='/' exact component={Dashboard} />
                  <PrivateRoute path='/leaderboard' component={Leaderboard} />
                  <PrivateRoute path='/questions/:id' component={Question} />
                  <PrivateRoute path='/add' component={AddQuestion} />
                  <Route path='/login' component={Login} />
                </div>}
            {this.props.authedUser ? <AuthButton dispatch={this.props.dispatch}/> : ''}
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps ({ authedUser}) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)


/*
authedUser === null means it's loading.
so the authedUser needs to be set up after the thing loads.


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}
 */