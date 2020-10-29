<template>
  <div class="app-header">
    <div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
      <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
      <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
    </div>
    <!-- 我是样例菜单 -->
    <el-menu
      default-active="1"
      class="el-menu-demo tab-page"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#409EFF"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="#">订单管理</a>
      </el-menu-item>
    </el-menu>

    <div class="app-header-userinfo">
      <el-dropdown trigger="hover" :hide-on-click="false">
        <span class="el-dropdown-link">
          {{ username }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isCollapse:false,
      username:"Yuhior"
    }
  },
  methods:{
     handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '提示', {})
        .then(() => {
          this.$cookie.clearCookie("username");
          this.$store.commit('SaveLoginInfo','');
          this.$router.push('/login');
        })
        .catch(() => { });
    },
  }
};
</script>

<style lang ="less" scoped>
.app {
  &-header{
    display: flex;
    &-userinfo {
      position: absolute;
      right: 0;
      margin-right: 25px;
      display: flex;
      flex-flow: row nowrap;
      height: 60px;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }
  }
  &-side {
    width: 230px;
    height: 100%;
    font-weight: 700;
    &-left {
      background-color: rgb(238, 241, 246);
    }
    &-logo {
      height: 60px;
      text-align: center;
    }
    &-collapsed {
      width: 66px!important;
    }
    &-expanded {
      width: 230px!important;
    }
  }
}
</style>