<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="login-card">
      <!-- 表单内容 -->
      <!-- 头部logo -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单 绑定model属性 绑定rules属性（表单验证规则）ref给el-form一个属性-->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
        <!-- 表单容器 设置prop属性表示要校验的字段名-->
        <el-form-item prop="mobile">
          <!-- 表单域 v-model双向绑定-->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <!-- 放置一个按钮  -->
          <el-button style="float:right " plain>发送验证码</el-button>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item prop="checked">

           <el-checkbox v-model="loginForm.checked">我已阅读同意用户协议隐私条款</el-checkbox>
        </el-form-item>
        <!-- 按钮 -->
        <el-button @click="login" style="width:100%" type="primary">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    // 登录表单的数据
      loginForm: {
        // 手机号
        mobile: '',
        // 验证码
        code: '',
        // 是否同意用户协议
        checked: false
      },
      // 定义表单验证规则
      loginRules: {
        // required表示该字段必填
        mobile: [{ required: true, message: '您的手机号不能为空' }, {
          pattern: /^1[3-9]\d{9}$/, // 手机号码正则表达式
          message: '您的手机号格式不正确'
        }],
        code: [{ required: true, message: '您的验证码不能为空' }, {
          pattern: /^\d{6}$/, // 验证码要求6个数字
          message: '您的验证码不正确'
        }],
        // 自定义校验
        checked: [{
          validator: function (rule, value, callback) {
          // rule是当前校验规则
          // value是当前检验字段的值
          // callback是一个回调函数 不论成功或失败都要执行
          // 成功执行callback 失败执行 callback(new Error('错误信息'))
          // 如果value为true就表示校验成功 false为失败
          // new Error(错误信息) 就是我们提示的错误信息
            value ? callback() : callback(new Error('您必须同意我们的协议'))
          }
        }]
      }
    }
  },
  methods: {
    login () {
      // 获取el-form对象实例

      this.$refs.loginForm.validate().then(() => {
        // 如果成功校验就会进入then
      })
    }
  }
}
</script>

<style lang='less' scoped>
// 加了scoped属性 就是只对当前自己的组件起作用
// 如果需要写less 需要在style标签中 lang='less'
.login {
  // background-image: url('../../assets/img/login_bg.jpg');
  // 当前屏幕可视区域分为100份
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '123';
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url('../../assets/img/login_bg.jpg');
    // 毛玻璃效果
    filter: blur(5px);
    background-size: cover;
  }
  .login-card {
    background: rgba(0,0,0,0);
    z-index: 2;
    width: 440px;
    height: 340px;
    .title {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}

</style>
