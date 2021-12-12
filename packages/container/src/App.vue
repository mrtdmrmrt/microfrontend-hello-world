<template>
  <div>
    <div>
      <router-link style="margin-right: 10px;" to="/">Use Home</router-link>
      <router-link style="margin-right: 10px;" to="/vue">Use Vue</router-link>
      <router-link to="/react">Use React</router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>
