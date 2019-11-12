<template>
  <div>
    <h1>Inside Container</h1>
    <InputComp
      :itemInput="itemInput"
      placeholder="enter an item"
      :addItem="addItem"
      :updateInput="updateInput"
    />
    <TodoList :getsprite="getSprite" :todos="todos" :removeItem="removeItem" :gettime="getTime" />
  </div>
</template>


<script>
import TodoList from "./TodoList.vue";
import InputComp from "./InputComp.vue";
let id = 0;
export default {
  components: {
    TodoList,
    InputComp
  },
  data() {
    return {
      itemInput: "",
      sprites: [],
      todos: [
        { id: id++, text: "clean house" },
        { id: id++, text: "make food" },
        { id: id++, text: "learn vue" }
      ]
    };
  },
  methods: {
    addItem() {
      console.log("enter key pressed");
      const trimmedText = this.itemInput.trim();
      if (trimmedText) {
        this.todos.push({
          id: id++,
          text: trimmedText
        });
        this.itemInput = "";
      }
    },
    removeItem(id) {
      let newTodos = this.todos.filter(item => {
        return item.id !== id;
      });
      this.todos = newTodos;
    },
    getTime() {
      let date = new Date();
      return date.getHours() + ":" + date.getMinutes();
    },
    updateInput(value) {
      this.itemInput = value;
    }
  }
};
</script>