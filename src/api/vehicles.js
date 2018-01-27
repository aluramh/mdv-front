import API from './config'

export default {
  getVehicles: (filters, cb) => {
    API.get('/vehicles', { params: filters }).then(res => {
      cb(res.data)
    }).catch(e => {
      console.error(e)
    })
  }
}
