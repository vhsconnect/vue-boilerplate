<template>
  <div>
  <h2>Inside TodoList</h2>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo" 
       />
    </ul>

  </div>
</template>


<script>
import TodoItem from './TodoItem.vue'
import InputComp from './InputComp.vue'

export default {
  components: {
    TodoItem
  },
  props: [
    "todos"
  ]
}
</script>