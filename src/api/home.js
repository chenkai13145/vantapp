import request from '../utils/request'
import qs from 'qs'
export function addOrder(data){
    return request({
        url:'add-order',
        method:'post',
        // headers:{
        //   'content-type':'application/json'
        // },
        // data:qs.stringify(data)
        data
    })
}

export function merOrder(data){
    return request({
        url:'mer-order',
        method:'post',
        // headers:{
        //   'content-type':'application/json'
        // },
        // data:qs.stringify(data)
        data
    })
}