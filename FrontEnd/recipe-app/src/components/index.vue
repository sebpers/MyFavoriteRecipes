<template>
    <div class="wrapper">
        <div class="recipeWrapper">
            <div>
                <img src alt>
            </div >
        
              <table>
                <tbody v-for="recipe in recipes" :key="recipe.id">
                    <th>{{recipe.title}}</th>
                    <tr v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                        <td v-for="key in ingredient" :key="key.id">{{key}}</td>
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
table{
  display: flex;
  justify-content: left;
  width: 500px;
  height: 150px;
  border: 1px solid rgb(124, 118, 118);
  border-radius: 8px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background-color: rgb(255, 216, 168);
}

th{
  color:brown;
  padding: 10px 3px 3px 10px;
}


td {
  padding: 3px 3px 3px 10px;
}
</style>
