<template>
    <div class="wrap">
        <h1>Add recipe</h1>
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                </tr>
                <td>
                    <input 
                        type="text"
                         v-model="newRecipe.title"
                    >
                </td>
                <tr>
                    <th>Ingredient</th>   
                    <!-- <th>Ingredient  <i class="material-icons" @click="addIngredient">add_circle</i></th>    -->
            
                </tr>
                <!-- <td v-for="ingredient in newRecipe.ingredients" :key="ingredient.id">
                    <input 
                        type="text"
                        v-model="ingredient.value"
                    >  
                </td> -->
                <td>
                    <input 
                    type="text"
                    >
                </td>
                <tr>
                    <th>amount</th>
                </tr>
                <td>
                    <input type="text">
                </td>
                <tr>
                    <th>unit</th>
                </tr>
                <td>
                    <select name="" id="">
                        <option value="">dl</option>
                        <option value="">cl</option>
                        <option value="">l</option>
                        <option value="">ml</option>
                        <option value="">kg</option>
                        <option value="">gram</option>
                    </select>
                </td>
                <tr>
                    <th>description</th>
                </tr>
                <td>
                    <textarea 
                    name id cols="30" rows="10"
                    v-model="newRecipe.description"
                    ></textarea>
                </td>
                <tr>
                    <button id="add" @click="addRecipe()">Add Recipe</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newRecipe: {
            title: '',
            ingredients:  [],
             description: '',
            }
        }
    },

    methods: {
        addIngredient: function() {
            this.newRecipe.ingredients.push({value: ' '})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
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
</style>
