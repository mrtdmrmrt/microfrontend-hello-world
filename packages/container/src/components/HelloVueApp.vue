<template>
  <div ref="root"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import { mount } from "helloVue/HelloVueApp";

export default {
  setup() {
    const root = ref(null);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log("root",root); // <div>This is a root element</div>
      console.log("mount",mount)
      mount(root.value);
    });
    return {
      root,
    };
  },
};
</script>
