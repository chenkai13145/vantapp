import request from '../utils/request'

export function Login(data){
      return request({
          url:'login',
          method:'post',
          data
      })
}
export function Register(data){
    return request({
        url:'register',
        method:'post',
        data
    })
}

export function merLogin(data){
    return request({
        url:'mer-login',
        method:'post',
        data
    })
}