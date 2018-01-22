/*
create by YOU
*/
<template>
  <div>i'm user page</div>
</template>

<script type="text/babel">
  export default {
    asyncData ({store, route}) {
      // 触发 action 后，会返回 Promise
      return store.dispatch('fetchItem', route.params.id)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>