import axios from 'axios'

const serve=axios.create({
    baseURL:"http://slv.hzlyzhenzhi.com/content/api/",
    timeout:60000
})

serve.interceptors.request.use(
 config => {
    config.headers['Content-Type'] = 'application/json' // 请求头带上token
    return config
  },
  error => {
    return Promise.reject(error)
  })

serve.interceptors.response.use(response=>{
        if (response.data && response.data.code === 401) {
          // 401, token失效
        //   clearLoginInfo()
          router.push({ name: 'login' })
        }
        return response
      },
      error => {
        return Promise.reject(error)
      }
)
export default serve