<template>
  <div id="login_style">
    <h1>登 录 页</h1>
    用户名:<input v-model="loginData.username" type="text" name="account" placeholder="输入用户名" maxlength="24"><br>
    密码:<input v-model="loginData.password" type="password" name="password" placeholder="输入密码"><br>
    <input v-model="loginData.rmbPassword" type="checkbox" name="remember_password">记住密码
    <a href="">忘记密码？</a><br>
    <button>登录</button>
    <button @click="onClickRegister">注册</button>
  </div>
</template>