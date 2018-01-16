import { connect } from 'react-redux'
import { setUser } from '../../redux/actions'
import LoginPage from './LoginPage'
import { isEmpty as _isEmpty } from 'lodash'

const mapStateToProps = state => {
  return {
    isLogged: !_isEmpty(state.user),
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch(setUser(user))
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginContainer
