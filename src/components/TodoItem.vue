<template>
  <li>
    {{todo.text}}
    {{todo.data}}
    {{gettime()}}
    <button @click="$emit('removeitem', todo.id)">press</button>
    <p> {{ pokeData }} </p>
  </li>
</template>


<script>
export default {
  data() {
    return {
      pokeData: {}
    }
  },
  props: ['todo', 'gettime'],
  //lifecycle hook to call fire async functions after data becomes watched
  created: function() {
    let v = this;
    return fetch('https://pokeapi.co/api/v2/pokemon/raichu')
      .then(function(res){
        return res.json()
      })
      .then(function(res){
        v.pokeData = res.abilities[0]
      })
  },
  methods: {
    setDate(){
      return new Date()
    }
  }
}
</script>

<style>
li {
  color: whitesmoke;
}
</style>
