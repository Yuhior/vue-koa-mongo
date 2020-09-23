<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" v-if="footer_show">Aside</el-aside>
      <el-container>
        <app-header v-if="header_show"></app-header>
        <router-view  v-on:header="header" v-on:footer="footer"/>
        <app-footer v-if="footer_show"></app-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
  },
  data(){
    return{
      header_show:true,
      footer_show:true,
    }
  },
  methods:{
     //是否显示头部
      header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      footer:function (bool) {
          this.footer_show = bool;
      }
  }
}
</script>

<style lang="less">
body,html,img{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
