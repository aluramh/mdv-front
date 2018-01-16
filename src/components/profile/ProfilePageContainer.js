import { connect } from 'react-redux'
import ProfilePage from './ProfilePage'

const mapStateToProps = state => ({
  user: state.user
})

const ProfilePageContainer = connect(
  mapStateToProps,
  null
)(ProfilePage)

export default ProfilePageContainer
