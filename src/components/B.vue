<template>
  <div>yayaya</div>
</template>

<script>
import eventBus from "../EventBus/index"
export default {
    mounted () {
        eventBus.$on('fromA',(val) => {
            console.log('6666', val);
        })
    }
}
</script>

<style>

</style>