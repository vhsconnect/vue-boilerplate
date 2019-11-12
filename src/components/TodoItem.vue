<script>
export default {
  data() {
    return {
      pokeData: {}
    };
  },
  props: ["todo", "gettime", "removeItem"],
  //lifecycle hook to fire async functions after data becomes watched
  created: function() {
    let v = this;
    return fetch("https://pokeapi.co/api/v2/pokemon/raichu")
      .then(function(res) {
        return res.json();
      })
      .then(function(res) {
        let randNum = Math.floor(Math.random() * 50);
        v.pokeData = res.moves[randNum].move.name.toUpperCase();
      });
  },
  methods: {
    setDate() {
      return new Date();
    }
  },
  render(h) {
    return (
      <li>
       <span class='padding-right'> {this.todo.text} </span>
        {this.todo.data} 
        <span class='padding-right'> {this.gettime()} </span>
        <button
          onClick={e => {
            e.preventDefault(); 
            this.removeItem(this.todo.id);
          }}
        >
         remove 
        </button>
      </li>
    );
  }
};
</script>

<style>
li {
  color: whitesmoke;
}
.padding-right {
  padding-right: 2em
}
</style>
