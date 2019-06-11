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
        <label id="ingredient">Ingredients {{ index }}</label>
        <label class="amountUnit">Amount</label>
        <label class="amountUnit">Unit</label>
    </div>
    <div id="ingredients" v-for="newIngredient in newRecipe.recipe.ingredients"              :key="newIngredient.id">
        <!-- <div class="labelIngredients">
            <label id="ingredient">Ingredients {{ index }}</label>
            <label class="amountUnit">Amount</label>
            <label class="amountUnit">Unit</label>
        </div> -->

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
          v-model="newIngredient.amount"
          type="number"
          placeholder="Enter amount.."
          min="0"
          :class="{ 'has-error': submitting && invalidIngredientsAmount }"
          @focus="clearStatus"
          >

    <input
        id="ingredientUnit"
        v-model="newIngredient.unit"
        type="text"
        placeholder="Enter unit.."
        :class="{ 'has-error': submitting && invalidIngredientsUnit }"
        @focus="clearStatus"
    >
    <i id="addRecepie" class="material-icons" @click="addIngrediensField()">add_circle</i>
</div>
        <label>Description</label>
         <textarea 
          v-model="newRecipe.recipe.description" 
          type="text"
          placeholder="Enter description.."
          :class="{ 'has-error': submitting && invalidDescription }"
          @focus="clearStatus"
          >
         </textarea>
<!-- 
        <label>Author</label>
        <input 
          v-model="newRecipe.recipe.author" 
          type="text"
          placeholder="Enter the author.."
          :class="{ 'has-error': submitting && invalidAuthor }"
          @focus="clearStatus"
          > -->
      <!-- Show an error message if something was missing -->
      <p v-if="error && submitting" class="error-message">❗Please fill out all required fields</p>
      <!-- Show a success message if everything went through -->
      <p v-if="success" class="success-message">✅  recipe successfully added</p>

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
          title: '',
          ingredients: [{
            name: "",
            amount: "",
            unit: ""
          }],
          description: "",
        //   author: ""
        }
      }
    };
  },
  methods: {
    async addRecipe(recipe) {
      try {
        const response = await fetch("http://localhost:3000/favoriterecipes", {
          method: "POST",
          body: JSON.stringify(recipe),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        });
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


      this.newRecipe = {
         recipe: {
          title: '',
          ingredients: {
            name: "",
            amount: "",
            unit: ""
          },
          description: "",
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
    },

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
    margin-top: 150px;
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
    margin-bottom: 10px;
}

#ingredients {
    display: flex;
    
}

#addRecepie {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

textarea {
    height: 300px;
    margin-bottom: 5px;
    padding: 5px;
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