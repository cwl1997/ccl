<template>
    <div>
       <el-button type="primary" @click="test">发送请求</el-button>
       <el-button type="primary" @click="deleteArr">数组测试</el-button>
    </div>
</template>

<script>
import { getPersonInfo,getPersondata } from "@/request/api.js"
export default {
    data () {
        return {
        disabled: false,
        objArr : [
        {id: 0, name: "小明",age:22},
        {id: 1, name: "小张",age:25},
        {id: 2, name: "小李",age:23},
        {id: 3, name: "小孙",age:32},
        {id: 1, name: "小周",age:42},
        {id: 2, name: "小陈",age:19},
    ]
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
        },
        deleteArr(){
            let arr1 = this.objArr
            //去重方法
            // let num =  this.changeArr(arr1,'id')
            // this.$log(num)
            // 排序方法
            // arr1 = arr1.sort((a,b)=>{ return a.age-b.age})//升序
            // arr1 = arr1.sort((a,b)=>{return b.age-a.age})//降序
            // this.$log(arr1)
          
        }
  }
}
</script>

<style lang='scss' scoped>
</style>