<template>
    <div id="recipe-form">
        <form @submit.prevent="handleSubmit">
            <label>Title</label>
            <input
                v-model="newRecipe.recipe.title"
                type="text"
                placeholder="Enter title.."
                :class="{ 'has-error': submitting && invalidTitle }"
                @focus="clearStatus"
                @keypress="clearStatus"
            >
            <div class="labelIngredients">
                <label id="ingredient">Ingredients</label>
                <div id="amountUnitWrapper">
                    <label class="amountUnit">Amount</label>
                    <label class="amountUnit">Unit</label>
                </div>
                <i id="addRecepie" class="material-icons" @click="addIngrediensField()">add_circle</i>
            </div>
            <div
                id="ingredients"
                v-for="(newIngredient, index) in newRecipe.recipe.ingredients"
                :key="newIngredient.id"
            >
                <input
                    id="ingredientName"
                    v-model="newIngredient.name"
                    type="text"
                    placeholder="Enter ingredient.."
                    :class="{ 'has-error': submitting && invalidIngredientsName }"
                    @focus="clearStatus"
                >

                <input
                    id="ingredientAmount"
                    class="inputFlex"
                    v-model="newIngredient.amount"
                    type="number"
                    placeholder=""
                    min="1"
                    :class="{ 'has-error': submitting && invalidIngredientsAmount }"
                    @focus="clearStatus"
                >

                <input
                    id="ingredientUnit"
                    class="inputFlex"
                    placeholder="Unit.."
                    v-model="newIngredient.unit"
                    type="text"
                    :class="{ 'has-error': submitting && invalidIngredientsUnit }"
                    @focus="clearStatus"
                >
                <i
                    id="removeRecepie"
                    class="material-icons"
                    @click="removeIngredient(index)"
                >remove_circle</i>
            </div>
            <label>Description</label>
            <textarea
                v-model="newRecipe.recipe.description"
                type="text"
                placeholder="Enter description.."
                :class="{ 'has-error': submitting && invalidDescription }"
                @focus="clearStatus"
            ></textarea>
            <!-- 
        <label>Author</label>
        <input 
          v-model="newRecipe.recipe.author" 
          type="text"
          placeholder="Enter the author.."
          :class="{ 'has-error': submitting && invalidAuthor }"
          @focus="clearStatus"
            >-->
            <!-- Show an error message if something was missing -->
            <p v-if="error && submitting" class="error-message">❗Please fill out all required fields</p>
            <!-- Show a success message if everything went through -->
            <p v-if="success" class="success-message">✅ recipe successfully added</p>

            <button>Add recipe</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "recipe-form",
    data() {
        return {
            submitting: false,
            error: false,
            success: false,

            //Wrap object to post in new object otherwise error
            newRecipe: {
                recipe: {
                    title: "",
                    ingredients: [
                        {
                            name: "",
                            amount: "",
                            unit: ""
                        }
                    ],
                    description: ""
                    //   author: ""
                }
            }
        };
    },
    methods: {
        async addRecipe(recipe) {
            console.log(recipe);
            try {
                const response = await fetch(
                    "http://localhost:3000/favoriterecipes",
                    {
                        method: "POST",
                        body: JSON.stringify(recipe),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },
        addIngrediensField() {
            this.newRecipe.recipe.ingredients.push({
                name: "",
                amount: "",
                unit: ""
            });
        },
        removeIngredient(index) {
            console.log(index);
            this.newRecipe.recipe.ingredients.splice(index, 1);
        },
        handleSubmit() {
            this.submitting = true;
            this.clearStatus();
            if (
                this.invalidTitle ||
                this.invalidIngredientsName ||
                this.invalidIngredientsAmount ||
                this.invalidIngredientsUnit ||
                this.invalidDescription
                // this.invalidAuthor
            ) {
                this.error = true;
                return;
            } else {
                this.addRecipe(this.newRecipe.recipe);
            }

            // Reset the inputfields in the form
            this.newRecipe = {
                recipe: {
                    title: "",
                    ingredients: [
                    {
                        name: "",
                        amount: "",
                        unit: ""
                    }
                  ],
                    description: ""
                    //   author: ""
                }
            };

            this.error = false;
            this.success = true;
            this.submitting = false;
        },
        clearStatus() {
            this.success = false;
            this.error = false;
        }
    },
    // Clear the inputs after the form is done submitting properly, and
    computed: {
        invalidTitle() {
            return this.newRecipe.recipe.title === "";
        },

        invalidIngredientsName() {
            return this.newRecipe.recipe.ingredients.name === "";
        },

        invalidIngredientsAmount() {
            return this.newRecipe.recipe.ingredients.amount === "";
        },

        invalidIngredientsUnit() {
            return this.newRecipe.recipe.ingredients.unit === "";
        },

        invalidDescription() {
            return this.newRecipe.recipe.description === "";
        }

        // invalidAuthor() {
        //   return this.newRecipe.recipe.author === "";
        // }
    }
};
</script>

<style scoped>
#recipe-form {
    width: 400px;
    background-color: red;
    margin-top: 162px;
    margin-left: 50%;
    transform: translate(-50%);
}

form {
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
}

input {
    padding: 5px;
    outline-color: rgb(216, 118, 83);
    margin-bottom: 4px;
}

::placeholder {
    font-size: small;
}

#ingredients {
    display: flex;
    width: 424px;
}

.labelIngredients {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
    width: 424px;
}

#amountUnitWrapper {
    width: 30%;
    margin-left: 29%;
    display: flex;
    justify-content: space-around;
}

label {
    margin-top: 8px;
    margin-bottom: 2px;
}

#ingredientName {
    width: 60%;
}

.inputFlex {
    width: 20%;
}

#addRecepie {
    color: green;
    cursor: pointer;
    align-self: center;
}

#removeRecepie {
    color: red;
    cursor: pointer;
    align-self: center;
}

textarea {
    height: 300px;
    margin-bottom: 5px;
    padding: 5px;
    outline-color: rgb(216, 118, 83);
}

[class*="-message"] {
    font-weight: 500;
    height: 600px;
}

.error-message {
    color: #d33c40;
    height: 25px;
}

.success-message {
    color: #32a95d;
    height: 25px;
}
button:focus {
    background: #009435;
    border: 1px solid #009435;
    outline: none;
}

button {
    padding: 5px;
    background-color: #ff7f50;
    color: whitesmoke;
    font-weight: bold;
    border: none;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
}
</style>