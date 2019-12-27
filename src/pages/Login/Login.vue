<template>
  <div class="login">
      <header>
          <h1>{{ msg }}</h1>
      </header>
      <div class='form'>
          <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
            >
                <a-form-item>
                <a-input class="form-Input"
                    v-decorator="[
                    'username',
                    { rules: [{ required: true, message: '请输入你的账号!' }] },
                    ]"
                    placeholder="用户名、手机号码或邮箱账号"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
                </a-form-item>
                <a-form-item>
                <a-input class="form-Input"
                    v-decorator="[
                    'password',
                    { rules: [{ required: true, message: '请输入你的密码!' }] },
                    ]"
                    type="password"
                    placeholder="密码"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
                </a-form-item>
                <a-form-item>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    登陆
                </a-button>
                </a-form-item>
            </a-form>
      </div>
  </div>
</template>

<script>
import { getLogin } from '@/request/api'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: '测试-鸿裕'
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          getLogin({                    
                ...values
            }).then(res => { 
                if(res.status == "success"){
                    this.$notification.success({
                        message: res.message,
                        duration:1,
                      })
                    localStorage.setItem('sessionId_vue', res.data.sessionId);
                    this.$router.push('/home') 
                }  else {
                    this.$notification.error({
                        message: res.message,
                        duration:1,
                      })
                }          
            })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    min-height: 100vh;
    padding-top: 150px;
    background-image: url('../../../public/background.svg')
}
.form{
    width: 384px;
    margin: 40px auto;
    text-align: left;
}
.form-Input{
    height: 40px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
  height: 40px;
}
</style>
