<template>
  <li>
    {{todo.text}}
    {{todo.data}}
    {{gettime()}}
    <button @click="$emit('removeitem', todo.id)">press</button>
    <p> One of Raichu's moves is {{ pokeData }} </p>
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
  //lifecycle hook to fire async functions after data becomes watched
  created: function() {
    let v = this;
    return fetch('https://pokeapi.co/api/v2/pokemon/raichu')
      .then(function(res){
        return res.json()
      })
      .then(function(res){
        let randNum = Math.floor(Math.random() * 50)
        v.pokeData = (res.moves[randNum].move.name).toUpperCase()
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
