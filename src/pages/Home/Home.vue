<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>number:{{ this.$store.state.home.number }}</p>
    <a-button @click="goLoginPage">Login</a-button>
    <a-button @click="addNumber">+1</a-button>
    <a-button @click="toZero">归零</a-button>
    <p style='margin:10px 0'>输入的值:{{this.$data.inputValue}}</p>
    <InputCom ref='inputChild' />
  </div>
</template>

<script>
import InputCom from '@/components/InputCom.vue'
export default {
  name: 'HelloWorld',
  components:{
    InputCom
  },
  created: function () {
    console.log('vue store',this.$store,)
  },
  data () {
    return {
      msg: '欢迎进入首页！',
      number: null ,
      inputValue: null,
    }
  },
  methods: {
    goLoginPage () {
      this.$router.push({path: '/login'})
    },
    addNumber () {
      this.$store.commit('home/addNumber')
    },
    toZero () {
      this.$store.commit('home/toZero', 0)
    },
    inputValueChange (value) {
      this.$data.inputValue = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
