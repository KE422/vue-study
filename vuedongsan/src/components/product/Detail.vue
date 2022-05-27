<template>
  <div id="detail">
      <h4>{{ pId }}</h4>
  </div>
</template>

<script>
export default {
    name: 'DetailPage',
    computed: {
        pId() {
            return this.$route.params.id;
        }
    },
}
</script>

<style>

</style>