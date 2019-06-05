<template>
    <div class="wrapper">
              <table v-for="recipe in recipes" :key="recipe.id">
                  <div class="recipeWrapper">
                      <div>
                <img src="https://placekitten.com/120/120" alt="The foods image">
            </div >
                <tbody>
                    <th>{{recipe.title}}</th>
                    <tr v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                        <td v-for="key in ingredient" :key="key.id" >{{key}}</td>
                    </tr>
                </tbody>
                </div>
            </table>
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
.wrapper {
    background-color: whitesmoke;
    width: 60vw;
    height: 100vh;
    margin-left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    padding-top: 120px;
}

.recipeWrapper {
    display: flex;
    border-radius: 3px;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.20);
    height: 130px;
    width: 500px;
    margin-bottom: 10px;
    border: 1px solid #8ACD83;
}   

img {
    margin: 5px;
}

table{
  display: flex;
  justify-content: left;
  /* border: 1px solid rgb(124, 118, 118); */
  /* box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05); */
}

th{
  color:brown;
  padding: 10px 3px 3px 10px;
}

td {
  padding: 3px 3px 3px 10px;
}
</style>
