<template>
    <div class="wrapper">
        <table v-for="recipe in recipes" :key="recipe.id">
            <div class="recipeWrapper">
                <div>
                    <img src="https://placekitten.com/120/120" alt="The foods image">
                </div>
                <tbody>
                    <th>{{recipe.title}}</th>
                    <tr v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                        <td>{{ingredient.amount}} {{ingredient.unit}}</td>
                        <td>{{ingredient.name}}</td>
                    </tr>
                    <hr>
                    <tr>
                        <td>{{recipe.description}}</td>
                    </tr>
                    <td id="button">
                        <button id="delete" @click="('deleteRecipe', recipe._id)">Delete</button>
                    </td>
                </tbody>
            </div>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",

    data() {
        return {
            recipes: []
        };
    },

    mounted() {
        this.getRecipe();
    },

    methods: {
        // Ascynchronous call for fetch
        async getRecipe() {
            try {
                const response = await fetch(
                    "http://localhost:3000/favoriterecipes"
                );
                const data = await response.json();
                this.recipes = data;
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },

        async deleteById(id) {
            try {
                await fetch(`http://localhost:3000/favoriterecipes/` + id, {
                    method: "DELETE"
                }).then(() => this.getRecipe());
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    background-color: whitesmoke;
    width: 60vw;
    height: auto;
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
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
    min-height: 130px;
    width: 500px;
    margin-bottom: 10px;
    border: 1px solid #8acd83;
    padding: 20px;
}

img {
    margin: 5px;
    padding-right: 20px;
}

table {
    display: flex;
    justify-content: left;
    /* border: 1px solid rgb(124, 118, 118); */
    /* box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05); */
}

th {
    color: brown;
    padding: 10px 3px 3px 10px;
}

td {
    padding: 3px 3px 3px 10px;
}
</style>
