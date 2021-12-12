<template>
  <div>
    {{ message }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!",
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    },
  },
};
</script>
