<template>
  <div>
       <p>请选择身份</p>
      <div class="user_register_li">
        <ul v-for="(item,index) in datalist" :key="index">
          <li :class='item.active? "active": ""' @click="choice_school_type(index)">{{item.text}}</li>
        </ul>
      </div>
      <div class="next_btn">
        <el-button class="next_btn_button" type="success" style="width:300px" @click="registerNext">下一步</el-button>
      </div>
      <div class="back_history">
          <span @click="historyBack">返回</span>
      </div>
  </div>
</template>

<script>
export default {
    props:['datalist'],
    data(){
        return{
            user_type:""
        }
    },
    methods:{
        choice_school_type(which){
            this.datalist.forEach(element => {
                element.active = 0;
            });
            this.datalist[which].active = 1;
            this.user_type = this.datalist[which].value;
        },
        historyBack(){
            if (window.history.length<=1) {
                this.$router.push({path:'/'})
                return false
            }else{
                this.$router.go(-1);
            }
            // 上边都没有执行就说明卡在当前页 也不是最后一条，history记录数量大于1 又没有回退记录只能返回首页
            // setTimeout(()=>{
            //     this.$router.push({path:'/'})
            // },1000)
        },
        registerNext(){
            this.$bus.$emit('schoolType', this.user_type);
            this.$router.push({path:'/register/regform'});
        }
    }
}
</script>

<style lang = "less" scoped>
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
</style>