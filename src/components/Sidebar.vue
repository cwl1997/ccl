<template>
  <div>
    <div class="app-side-logo">
      <img src="@/assets/logo.png"
          :width="collapse ? '60' : '60'"
          height="60" />
    </div>
       
    <el-menu class="el-menu-vertical-demo"
          :default-active="defaultActive"
            router
            :collapse="collapse"
            >
      <SidebarItem v-for="(item, idx) in routes" 
        :subroute="item"
        :fatherpath="fatherPath"
        @click="test"
        :barIdx="idx" :key="idx" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  naem: "Sidebar",
  components: {
    SidebarItem
  },
  props: {
    collapse: {
      type: Boolean
    },
    routes: {
      type: Array
    }
  },
  computed: {
     // 首次进入页面时展开当前页面所属的菜单
    defaultActive(){
      return this.$route.path
    },
    fatherPath(){
      // 这里直接获取路由配置的 '/' 项
      return this.$router.options.routes[1].path
    }
  },
  methods:{
    test(){
      console.log(213)
    }
  }
}
</script>

<style>

</style>