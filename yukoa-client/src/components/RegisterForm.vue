<template>
  <div class="registerform_container">
    <el-form ref="form" :model="form" :rules="rules"  label-width="20px">
        <el-form-item label="" prop="alias_name">
            <el-input v-model="form.alias_name" placeholder="请输入昵称" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="" prop="mobile">
            <el-input v-model="form.mobile" placeholder="请输入手机号" prefix-icon="el-icon-mobile"></el-input>
        </el-form-item>
        <el-form-item label=""  prop="password">
            <el-input v-model="form.password" show-password placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item label="" prop="confirmPassword">
            <el-input v-model="form.confirmPassword" show-password placeholder="确认密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.value" prefix-icon="el-icon-key" placeholder="输入手机验证码" style="width:280px"></el-input>
            <el-button style="margin-left:10px;width:110px">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:300px"  @click="onSubmit('form')">注册</el-button>
        </el-form-item>
        <div class="registerform_bottom">
            <span @click="historyBack">返回</span>
            <span>登陆</span>
        </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["schoolType"],
  data() {
    var validatePass = (rule, value, callback) => {
        //console.log(value)
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (this.form.confirmPassword !== '') {
            //console.log(this.$refs.form)
            this.$refs.form.validateField('confirmPassword');
        }
        callback();
    }
    };
    var validatePass2 = (rule, value, callback) => {
        console.log(value)
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
    };
    return {
        form: {
          alias_name: '',
          password: '',
          mobile:'',
          confirmPassword: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          mobileVerification:''
        },
        rules: {
            alias_name: [
                { required: true, message: '请输入昵称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            password: [
               { validator: validatePass, trigger: 'blur' }
            ],
            mobile: [
                { required: true, message: '输入手机号', trigger: 'blur' }
            ],
            confirmPassword: [
                { validator: validatePass2, trigger: 'blur' }
            ]
        }
    };
  },
  methods:{
      onSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.Register({
                alias_name:this.form.alias_name,
                password:this.form.password,
                mobile:this.form.mobile,
                school_type:this.schoolType
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
       
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
  },
  mounted() {
    if (!this.schoolType) {
      this.$router.push("./");
    }
  }
};
</script>

<style lang="less" scoped>
.registerform_container{
    padding: 0 40px;
    .registerform_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>