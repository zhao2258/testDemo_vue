import axios from 'axios'

//根据环境掉不同的接口
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'http://220.189.216.106:10050'
} else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'http://220.189.216.106:10050'
} else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'http://220.189.216.106:10050'
}


// 设置链接超时
axios.defaults.timeout = 10000 

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post['sessionId'] = localStorage.getItem('sessionId_vue')

axios.interceptors.response.use(    
    response => {   
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },    
    error => {            
        if (error.response.status) {            
            switch (error.response.status) {                
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { 
                            redirect: router.currentRoute.fullPath 
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                    this.$notification.error({
                        message: '登录过期，请重新登录',
                      })
                    // 清除token
                    localStorage.removeItem('token');
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 
                case 404:
                    this.$notification.error({
                        message: '网络请求不存在',
                      })
                    break;
                default:
                    this.$notification.error({
                        message: error.response.data.message,
                        })
            }
            return Promise.reject(error.response);
        }
    }    
)

export function GET(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}

export function POST(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}