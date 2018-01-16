import API from './config'

export default {
  getCurrentSession: (cb) => {
    API.get('/users/session').then(res => {
      const userData = res.data;
      cb(userData)
    }).catch(e => {
      console.error(e)
    })
  },

  submitLogin: (formData, cb) => {
    API.post('/login', formData).then(res => {
      cb(res.data.data)
    }).catch(e => {
      console.error(e)
    })
  }
}
