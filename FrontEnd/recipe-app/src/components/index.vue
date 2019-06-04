<template>
  <div class="wrapper">
    <div class="recipeWrapper">
      <div>
        <img src alt>
      </div>

      <table>
        <tbody v-for="recipe in recipes" :key="recipe.id">
          <th>{{recipe.title}}</th>
          <tr>
            <td v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              <tr v-for="key in ingredient" :key="key.id">
                <td>{{key}}</td>
              </tr>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    recipes: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
