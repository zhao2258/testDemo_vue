import { GET, POST } from './http'

export const getLogin = params => { // 登陆接口
    return POST('/rs/login', params)
}
