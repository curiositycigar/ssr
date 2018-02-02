/*
create by YOU
*/
<template>
  <div>
    <input v-model="name"></input>
    <router-link to="/home">Home</router-link>
    <router-link :to="name ? `/user/${name}` : '/user'">User</router-link>
    <router-link to="/page1">Page1</router-link>
    <router-link to="/page2">Page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'app',
    data() {
      return {
        name: '123'
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>