import API from './config'

export default {
  getPolizas (cb) {
    API.get('/polizas').then(response => {
      cb(response.data)
    }).catch(err => {
      console.error(err)
    })
  }
}
