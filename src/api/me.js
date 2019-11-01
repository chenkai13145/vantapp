import request from '../utils/request'
import qs from 'qs'
export function alterImage(data){
    return request({
        url:'alter-image',
        method:'post',
        // headers:{
        //   'content-type':'application/json'
        // },
        // data:qs.stringify(data)
        data
    })
}
export function alterMsg(data){
    return request({
        url:'alter-msg',
        method:'post',
        // headers:{
        //   'content-type':'application/json'
        // },
        // data:qs.stringify(data)
        data
    })
}

export function memberOrder(data){
    return request({
        url:'member-order',
        method:'post',
        // headers:{
        //   'content-type':'application/json'
        // },
        // data:qs.stringify(data)
        data
    })
}
export function merSure(data){
    return request({
        url:'mer-sure',
        method:'post',
        // headers:{
        //   'content-type':'application/json'
        // },
        // data:qs.stringify(data)
        data
    })
}