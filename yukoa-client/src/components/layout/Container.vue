<template>
    <el-container>
      <app-aside width="200px"></app-aside>
      <el-container>
         <el-header>
          <app-header ></app-header>
         </el-header>
          <el-main >
           <router-view />
          </el-main>
        <app-footer ></app-footer>
      </el-container>
    </el-container>
</template>

<script>
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
export default {
  components:{
    'app-header':Header,
    'app-aside':Aside,
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
  },
  mounted(){
    //console.log(this.header_show);
  }
};
</script>

<style>
</style>