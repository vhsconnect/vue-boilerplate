<template>
  <div>
  <h1>Inside Container</h1>
  <TodoList 
    :todos="todos"
  />
  </div>
</template>


<script>
  let id = 0;
  import TodoList from './TodoList.vue'
  export default {
    components: {
      TodoList
    },
    data(){
      return {
        todos: [
          { id: id++, text: "clean hoouse"},
          { id: id++, text: "learn vue"},
          { id: id++, text: "make a sandwhich"},
        ]
      }
    }
  }
</script>