import { connect } from 'react-redux'
import ProfilePage from './ProfilePage'
import { isEmpty as _isEmpty } from 'lodash'

const mapStateToProps = state => ({
  user: state.user,
  isLogged: !_isEmpty(state.user)
})

const ProfilePageContainer = connect(
  mapStateToProps,
  null
)(ProfilePage)

export default ProfilePageContainer
