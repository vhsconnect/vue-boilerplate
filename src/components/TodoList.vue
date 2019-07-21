<template>
  <div>
    <ul>
      <!-- notice the syntactical difference between passing a function down as props, vs passing down an event listener ref -->
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo" 
        @removeitem="removeitem"
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
    "removeitem",
    "gettime",
  ]
  }
</script>