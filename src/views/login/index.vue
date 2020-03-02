<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="login-card">
      <!-- 表单内容 -->
      <!-- 头部logo -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单 -->
      <el-form style="margin-top:20px">
        <!-- 表单容器 -->
        <el-form-item>
          <!-- 表单域 -->
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-input style="width:60%" placeholder="请输入验证码"></el-input>
          <!-- 放置一个按钮  -->
          <el-button style="float:right " plain>发送验证码</el-button>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item>

           <el-checkbox>我已阅读同意用户协议隐私条款</el-checkbox>
        </el-form-item>
        <!-- 按钮 -->
        <el-button style="width:100%" type="primary">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
// 加了scoped属性 就是只对当前自己的组件起作用
// 如果需要写less 需要在style标签中 lang='less'
.login {
  background-image: url('../../assets/img/login_bg.jpg');
  // 当前屏幕可视区域分为100份
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
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
