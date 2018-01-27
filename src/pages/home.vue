/*
create by YOU
*/
<template>
  <div>
    <h1>{{$store.state.title}}</h1>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        title: 'SSR'
      }
    },
    mounted() {
      console.log(this.$store)
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>