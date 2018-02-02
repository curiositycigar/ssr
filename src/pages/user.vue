/*
create by YOU
*/
<template>
  <div>
    <el-button @click="goto">goto Home</el-button>
    <div>i'm user {{name}}</div>
  </div>
</template>

<script type="text/babel">
  export default {
    asyncData ({store, route}) {
      // 触发 action 后，会返回 Promise
      return store.dispatch('fetchItem', route.params.id)
    },
    data () {
      return {
        name: 'unknown'
      }
    },
    created() {
      let name = this.$route.params.name
      this.name = name ? name : 'unknown'
    },
    methods: {
      goto() {
        console.log('goto home')
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>