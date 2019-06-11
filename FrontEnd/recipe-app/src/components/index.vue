<template>
    <div class="wrapper">
        <table v-for="recipe in recipes" :key="recipe.id" >
            <div class="recipeWrapper">
                <h1>{{recipe.title}}</h1>
                <tbody>
                    
                    <tr v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                        <td>{{ingredient.amount}} {{ingredient.unit}}</td>
                        <td>{{ingredient.name}}</td>
                    </tr>
                    <hr>
                    <tr>
                        <td>{{recipe.description}}</td>
                    </tr>
                    <!-- <div>
                    <img src="https://placekitten.com/220/220" alt="The foods image">
                </div> -->
                    <td id="button" >
                        <a id="delete" @click="deleteById(recipe._id)"><i id="delete" class="material-icons">delete</i></a>
                     
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
            recipes: [],

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
#delete{
    color:crimson;
    cursor: pointer;
}
#delete:hover{
    transform: scale(1.2)
}

.wrapper {
    background-color: whitesmoke;
    width: 100vw;
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
    flex-direction: column
    /* ändra skugga */;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    min-height: 130px;
    width: 800px;
    margin-bottom: 10px;
    /* border: 1px solid #8acd83; */
    padding: 20px;
}

img {
    margin: 15px;
    padding-right: 20px;
    margin-top: 20%;

}

table {
    display: flex;
    justify-content: left;
    /* border: 1px solid rgb(124, 118, 118); */
    /* box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.05); */
}

h1 {
    color: rgb(216, 118, 83);
    padding: 5px 3px 3px 5px;
    font-size: 18px;
}

td {
    padding: 3px 3px 3px 10px;
}
</style>
