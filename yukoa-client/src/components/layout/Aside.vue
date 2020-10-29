<template>
  <div>
    <el-aside width="200px"  height="100vh"
      class="app-side app-side-left"
      :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
    >
      <div class="app-side-logo">
        <img
          src="@/assets/logo.png"
          :width="isCollapse ? '60' : '60'"
          height="60"
        />
      </div>
      <div>
        <!-- 我是样例菜单 -->
        <el-menu style="height:calc(100vh - 62px);overflow-y:auto "
          :default-openeds= "['0','1']"
          class="el-menu-vertical-demo"
          :router="true"
          :default-active="this.$route.path"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu  v-for="(item,index) in activeMenuList" :key="index" :index="index+''">
              <template slot="title"  >
                <i :class="item.type" ></i>
                <span  slot="title">{{item.text}}</span>
              </template>
              <div v-for="(c,cindex) in item.children" :key="cindex" >
                  <el-menu-item :index="'/user/'+item.path+ '/'+ c.path" >{{c.text}}</el-menu-item>
              </div>
          </el-submenu>
        </el-menu>
      </div>
    </el-aside>
  </div>
</template>
<script>
//import asyncRouterMap from './../../router/asyncRouterMap'
export default {
  data() {
    return {
      isCollapse: true,
      menuItemData:[],
      openList:[],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted (){
    this.menuItemData = this.$store.state.menuList;
  },
  computed:{
    activeMenuList:function(){
      return this.menuItemData.filter(function(item){
        return item.children.length&&item.children
      })
    }
  }
};
</script>

<style lang ="less" scoped>
.app-side-logo{
    line-height: 60px;
    padding: 0 70px;
    img{
        vertical-align: middle;
        margin: 0 auto;
    }
}
</style>