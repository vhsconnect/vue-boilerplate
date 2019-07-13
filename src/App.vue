<template>
  <div id="app">
  <h1>From App.vue: {{email}}</h1>
    <Comp1 
    :contactme="email"
    :groceries="groceryList" 
    />
  </div>
</template>

<script>
import Comp1 from "./components/Comp1.vue";
export default {
  components: {
    Comp1
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
