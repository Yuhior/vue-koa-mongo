<template>
  <div>
    <div class="error">
        <span class="aaa">404</span> <br><br><br><br><br><br>
        <span class="bbb">很抱歉页面它不小心迷路了</span>
        <br><br>
         <el-button  @click="backHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        backHome(){
            this.$router.push({path:'/home'})
        }
    }
}
</script>

<style lang="less" scoped>
.error{
        text-align: center;
        height: 100vh;
        width: 100vw;
        background: #61bec7;
        .aaa{
            
            font-size: 250px;
            color: white;
            font-family: '方正舒体'
        }
        .bbb{
            
            font-size: 80px;
            color: white;
            font-family: '方正舒体'
        }
    }
</style>