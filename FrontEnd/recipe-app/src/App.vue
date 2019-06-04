<template>
  <div id="app">
    <Index :recipes="recipes"/>
  </div>
</template>

<script>
import Index from './components/index.vue'

export default {
  name: 'app',
  components: {
    Index
  },
  data() {
    return {
      recipes: [],
    }
  },
    mounted() {
      this.getRecipe();
    },
  methods: {
    // Ascynchronous call for fetch
    async getRecipe() {
      try {
        const response = await fetch('http://localhost:3000/recipes');
        const data = await response.json();
        this.recipes = data;
        console.log(data)
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
