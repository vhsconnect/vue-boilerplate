<template>
  <li>{{todo.text}} 
    <button @click="$emit('removeitem', todo.id)"> 
   press 
    </button></li>
</template>


<script>
export default {
  props: ['todo']
}
</script>

<style>
li {
  color: whitesmoke
}
</style>
