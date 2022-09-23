<template>
  <component :is="loginPage"></component>
</template>

<script>
import loginPage from './loginPage.vue'
import registerPage from './registerPage.vue'

export default {
  components:{
    loginPage,
    registerPage
  }
}
</script>