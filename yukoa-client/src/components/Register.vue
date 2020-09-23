<template>
  <div class="user_passport_content_v3">
    <div class="user_passport_content_bg">
      <img src="../../public/img/login_bg.png" />
    </div>
    <div class="user_register_container">
      <el-divider content-position="center" class="elDivider">
        <span class="register_logo">注册</span>
      </el-divider>
     <router-view :datalist="schoolType_list" :schoolType="schoolType" />
    </div>
  </div>
</template>
<script>
// import RegisterLi from '@/components/RegisterLi'
// import RegisterForm from '@/components/RegisterForm'
export default {
  // components: {
  //   RegisterLi,
  //   RegisterForm
  // },
  data() {
    return {
      schoolType_list: [
        { text: "艺术家", value:"1",active:1},
        { text: "艺术之星", value: "2" ,active:0},
        { text: "美术馆", value: "3" ,active:0},
        { text: "教育机构", value: "4",active:0 },
        { text: "政企机构", value: "5" ,active:0}
      ],
      schoolType:""
    };
  },
  methods:{
  },
  created(){
    this.$bus.$on('schoolType',vm=>{
        this.schoolType = vm;
        console.log(this.schoolType)
    });
    this.$emit('header', false);
    this.$emit('footer', false);
  }
};
</script>

<style lang="less" scoped>
.user_passport_content_v3 {
  height: 100vh;
  width: 100vw;
  position: relative;
  .user_passport_content_bg {
    width: 100vw;
    height: 100vh;
    img {
      width: 100vw;
      height: 100vh;
    }
  }
  .user_register_container {
    width: 500px;
    height: 500px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 6px 16px 0px rgba(6, 0, 1, 0.02);
    opacity: 0.7;
    filter: alpha(opacity=70);
    .elDivider{margin: 60px 0 30px 0;}
    .register_logo {
      font-size: 20px;
    }
    .next_btn{
      margin: 25px 0 20px 0;
      .next_btn_button{background: #42bc7F;}
    }
    .back_history{cursor: pointer;}
    .user_register_li {
      ul {
        margin: 0;
        padding: 0;
      }
      .active{border-color: #42bc7f;color: #42bc7f;}
      li {
        list-style-type: none;
        width: 250px;
        border: 1px solid #333;
        padding: 8px 10px;
        margin: 10px auto;
        cursor: pointer;
      }
    }
  }
}
</style>