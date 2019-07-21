<template>
  <div>
    <h1>Inside Container</h1>
    <InputComp v-model="addItemInput" placeholder="enter an item" @keydown.enter="addItem" />
    <TodoList :getsprite="getSprite" :todos="todos" :removeitem="removeItem" :gettime="getTime"/>
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
      addItemInput: "",
      sprites: [],
      todos: [
        { id: id++, text: "clean house"}, 
        { id: id++, text: "make food"},
        { id: id++, text: "learn vue"},
      ]
    };
  },
  methods: {
    addItem() {
      const trimmedText = this.addItemInput.trim();
      if (trimmedText) {
        this.todos.push({
          id: id++,
          text: trimmedText,
          data: this.spr 
        });
        this.addItemInput = "";
      }
    },
    removeItem(id){
     let newTodos = this.todos.filter((item) => {
        return item.id !== id
      })
      this.todos = newTodos
    },
    getTime(){
      let date = new Date()
      return date.getHours() + ':' + date.getMinutes()
    },
  }
};
</script>