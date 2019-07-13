import Vue from 'vue';
import App from './App.vue';
import '../assets/styles.css'

Vue.config.devtools = true;

new Vue({
  el: '#app',
  render: h => h(App), //the h function is the render function
})



