<template>
  <a-input placeholder="Basic usage" @change="onValueChange" v-model="InputValue" />
</template>

<script>
export default {
    name: 'InputCom',
    data(){
        return {
            InputValue:null
        }
    },
    methods: {
        onValueChange : function(e) {
            this.$parent.inputValueChange(e.target.value)
        }
    }
}
</script>

<style>

</style>