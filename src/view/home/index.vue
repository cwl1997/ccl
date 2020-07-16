<template>
    <div>
       <el-button type="primary" @click="test">主要按钮</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
        disabled: false,
    }
},
    created () {

},
    methods: {
        test(){
            let session = window.sessionStorage
            console.log(session)
        }
  }
}
</script>

<style lang='scss' scoped>
</style>