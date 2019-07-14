<template>
  <div>
    <h1>Inside Container</h1>
    <InputComp v-model="addItemInput" placeholder="enter an item" @keydown.enter="addItem" />
    <TodoList :todos="todos" :removeitem="removeItem" />
  </div>
</template>


<script>
let id = 0;
import TodoList from "./TodoList.vue";
import InputComp from "./InputComp.vue";

export default {
  components: {
    TodoList,
    InputComp
  },
  data() {
    return {
      addItemInput: "",
      todos: [
        { id: id++, text: "clean hoouse" },
        { id: id++, text: "learn vue" },
        { id: id++, text: "make a sandwhich" }
      ]
    };
  },
  methods: {
    addItem() {
      const trimmedText = this.addItemInput.trim();
      if (trimmedText) {
        this.todos.push({
          id: id++,
          text: trimmedText
        });
        this.addItemInput = "";
      }
    },
    removeItem(id){
     let newTodos = this.todos.filter((item) => {
        return item.id !== id
      })
      this.todos = newTodos
    }
  }
};
</script>