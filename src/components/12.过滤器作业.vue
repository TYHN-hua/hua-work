<template>
  <div>
      <p>国内粉丝数量：{{msg | get1}}万</p>
      <p>外国粉色数量：{{msg | get2}}万</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg:1876986
        }
    },
    filters: {
      get1: (val) => {
        return val / 10000
      },
      get2: (val) => {
        return val /1000
      }
      
    }
}
</script>

<style>

</style>