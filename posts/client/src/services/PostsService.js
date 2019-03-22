import Api from '@/services/Api'

export default {
  fetchPosts() {
    return Api().get('posts')
  },
  fetchEquipment(params) {
    return Api().get('equipment/' + params.id)
  },
  getEquipment() {
    return Api().get('equipment')
  },
  getClients(params) {
    return Api().get('/clientes/' + params.equipo_id + '/' + params.usuario_id)
  }
}