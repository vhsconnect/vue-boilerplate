<template>
  <div id="app">
  <h1>A simple todo app</h1>
  <Container/>
  </div>
</template>

<script>
import Container from "./components/Container.vue"

export default {
  components: {
    Container
  },
  data() {
    return {

      email: "jojo@hotto.com",
      groceryList: [
        { id: 1, item: "broccoli" },
        { id: 2, item: "mushrooms" },
        { id: 3, item: "gouda" }
      ]
 
    };
  }
};
</script>
