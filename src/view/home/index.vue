<template>
    <div>
       <el-button type="primary" @click="test">主要按钮</el-button>
    </div>
</template>

<script>
import { getPersonInfo,getPersondata } from "@/request/api.js"
export default {
    data () {
        return {
        disabled: false,
    }
},
    created () {

},
    methods: {
       async test(){
            const params = {
               appkey:'ba3764357d6728cd',
               shouji:'17771510991'
           }
            // let session = window.sessionStorage
            // console.log(session)
            // this.$axios({
            //     url:'https://api.jisuapi.com/shouji/query' ,
            //     methods:'get',
            //     data:params
            // }).then((res)=>{
            //     console.log(res)
            // })
          
           let res = await getPersondata(params)
           console.log(res)
        }
  }
}
</script>

<style lang='scss' scoped>
</style>