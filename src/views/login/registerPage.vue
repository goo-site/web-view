<template>
  <div id="login_style">
      <h1>注 册 页</h1>
      用户名:<input v-model="registerData.username" type="text" name="user_name" placeholder="输入用户名" maxlength="24"><br>
      邮箱:<input v-model="registerData.email" type="email" name="email" placeholder="输入邮箱"><br>
      验证码:<input v-model="registerData.verificationCode" type="text" name="verification_code" maxlength="6"><button>发送验证码</button><br>
      密码:<input v-model="registerData.password" type="password" name="password" placeholder="输入密码"><br>
      确认密码:<input v-model="registerData.confirm" type="password" name="password" placeholder="再次输入密码"><br>
      <button @click="onClickRegister">返回</button>
      <button>注册</button>
  </div>
</template>