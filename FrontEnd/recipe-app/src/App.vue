<template>
  <div id="app">
    <navbar></navbar>
    <Index :recipes="recipes"/>
  </div>
</template>

<script>
import Index from './components/index.vue';
import navbar from './components/navbar';

export default {
  name: 'app',
  components: {
    Index,
    navbar
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #8ACD83;
  height: 100vh;
}
</style>
