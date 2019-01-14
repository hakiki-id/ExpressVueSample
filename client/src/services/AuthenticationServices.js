import ApiServices from '@/services/ApiServices'

export default {
  register (authentication) {
    return ApiServices().post('register', authentication)
  }
}
