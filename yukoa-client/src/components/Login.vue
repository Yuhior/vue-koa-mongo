<template>
  <div class="user_passport_content_v3">
    <div class="user_passport_content_bg">
      <img src="../../public/img/login_bg.png" />
    </div>
    <div class="user_passport_content_login_center"></div>
    <div class="user_passport_content_login">
      <div class="user_passport_login_img">
        <img src="../../public/img/login_logo.png" />
      </div>
      <div class="login_line_container">
        <div>
          <div class="login_line_left"></div>
        </div>
        <div class="welcome_login">欢迎登录</div>
        <div>
          <div class="login_line_right"></div>
        </div>
      </div>
      <div class="login_line_form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <div class="login_form_input" label="用户" style="margin-top: 58px;">
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入用户名或手机号"></el-input>
            </el-form-item>
          </div>
          <div class="login_form_input" label="密码" style="margin-bottom:7px ;">
            <el-form-item prop="userpass">
              <el-input type="password" v-model="ruleForm.userpass" placeholder="请输入用户密码"></el-input>
            </el-form-item>
          </div>
          <div class="login_form_forgot">
            <div class="login_form_remember_container">
              <div class="login_form_remember_password">
                <input type="checkbox" />
                <span>记住密码</span>
              </div>
            </div>
            <div class="login_form_forget_password">
              <div>
                <a href="user.php?act=get_password" style="color:#42bc7f;">忘记密码</a>
              </div>
            </div>
          </div>
          <div class="login_btn">
            <input class="login_submit" type="button" @click="submitForm('ruleForm')" value="登录" />
          </div>
          <div class>
            <span>
              <a href="/" style="color: #42bc7f;">返回首页</a>
            </span>
            <span style="margin: 0 10px;color: #42bc7f;">|</span>
            <span>
              <a style="color: #42bc7f;" href="/register">注册</a>
            </span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        userpass: ""
      },
      rules: {
        username: [
            { required: true, message: "用户名或手机号", trigger: "blur" },
        ],
        userpass: [
            { required: true, message: "密码不得为空", trigger: "blur" },
            { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            // this.$api.getUsers({
            //     username:this.ruleForm.username,
            //     password:this.ruleForm.userpass
            // }).then(res => {
            //     console.log(res);
            // }).catch((err) => {
            //     console.log(err);
            // })
        
            this.$api.Login({
                username:this.ruleForm.username,
                password:this.ruleForm.userpass
            }).then((res) => {
                let loginType = '';
                console.log(res);
                if (res.code===200) {
                  //登陆之后进行token的储存
                  //localStorage.setItem('USER_TOKEN', JSON.stringify(res.token));
                  (res.token)&&(this.$store.commit('setUserToken',res.token)); 

                  // 对登陆状态的cookie 存储
                  
                  this.$cookie.setCookie({username:res.username},2/144);
                  loginType ='success' ;
                  
                }else{
                  loginType ='error' ;
                }
                this.$message({
                  message: res.msg,
                  type: loginType,
                  onClose:()=>{
                    const _this = this;
                    if (loginType=='success') {
                      _this.$router.push("/resource");
                    }
                  }
                });
            }).catch((err) => {
                console.log(err)
            })


            //const ret =  axios.post('/api/users/login', { params: {username:this.ruleForm.username, password:this.ruleForm.userpass  } })
            //console.log(ret);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created:function () {
    this.$emit('header', false);
    this.$emit('footer', false);
  }
};
</script>

<style  lang="less" scoped>
.user_passport_content_v3 {
  height: 100vh;
  width: 100vw;
  .user_passport_content_bg {
    width: 100vw;
    height: 100vh;
    img {
      width: 100vw;
      height: 100vh;
    }
  }
  .user_passport_content_login {
    text-align: center;
    height: 584px;
    width: 581px;
    background: transparent;
    border-radius: 10px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .user_passport_login_img {
      margin-top: 56px;
      img {
        opacity: 1;
        filter: alpha(opacity=100);
        z-index: 100;
      }
    }
    .login_line_container {
      display: table;
      margin: 0 auto;
      margin-top: 12px;
      > div {
        display: table-cell;
        vertical-align: middle;
      }
      .welcome_login {
        font-size: 20px;
        font-weight: bold;
        padding: 0 10px;
      }
      .login_line_left,
      .login_line_right {
        width: 53px;
        height: 1px;
        background: black;
      }
    }
    .login_line_form {
      .login_form_input {
        input {
          width: 382px;
          height: 50px;
          border: 1px solid #999999;
          border-radius: 4px;
          background: #f8f8fa;
          color: #999999;
          text-indent: 29px;
        }
      }
      .login_form_input {
        margin: 34px auto;
        width: 382px;
      }
      .login_form_forgot {
        width: 382px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        display: table;
        margin-bottom: 20px;
        .login_form_remember_container,
        .login_form_forget_password {
          display: table-cell;
          vertical-align: middle;
        }
        .login_form_forget_password {
          text-align: right;
          color: #42bc7f;
        }
        .login_form_remember_password {
          display: table;
          input,
          span {
            padding: 0 4px;
            color: #666;
            display: table-cell;
            vertical-align: middle;
          }
        }
      }
      .login_btn {
        .login_submit {
          font-size: 16px;
          margin-bottom: 20px;
          text-indent: 1em;
          letter-spacing: 1em;
          width: 382px;
          height: 50px;
          background: #42bc7f;
          color: #fff;
          border: 1px solid #42bc7f;
          border-radius: 4px;
        }
      }
    }
  }
  .user_passport_content_login_center {
    height: 584px;
    width: 581px;
    background: #fff;
    box-shadow: 0px 6px 16px 0px rgba(6, 0, 1, 0.02);
    border-radius: 10px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
}
</style>