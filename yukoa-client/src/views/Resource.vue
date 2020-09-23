<template>
  <div>这是资源页面</div>
</template>

<script>
export default {
  name: "Resource",
  data() {
    return {};
  },
  created: function() {
    this.$emit("header", true);
    this.$emit("footer", true);
  }
};
</script>

<style>
</style>