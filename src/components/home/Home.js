import React, { Component } from 'react'
import { isEmpty as _isEmpty } from 'lodash'
import userApi from './../../api/user'

class Home extends Component {
  componentDidMount = () => {
    userApi.getCurrentSession(userSession => {
      if (_isEmpty(userSession)) {
        // If it's empty, redirect to login.
        this.props.history.push('/login')
      } else {
        // Else, redirect to profile page.
        this.props.history.push('/profile')
      }
    })
  }

  render () {
    return (
      <div>This is the home</div>
    )
  }
}

export default Home
