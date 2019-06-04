<template>
  <div class="wrapper">
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        {{ recipe }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    recipes: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
  }
</style>
