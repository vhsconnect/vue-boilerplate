<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo" 
        :removeItem="removeItem"
        :gettime="gettime"
        :getsprite="getsprite"
       />
    </ul>

  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  export default {
  components: {
    TodoItem
  },
  props: [
    "todos",
    "removeItem",
    "gettime",
  ]
  }
</script>