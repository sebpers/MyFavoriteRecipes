<template>
    <div class="navbarWrapper">
        <div class="textHeader">
            <router-link class="link" to="/">
                <h1>Vegan 🥗 Vegetarian Recipes</h1>
                  <p class="subHeader">Only five ingredients and a dish in less than 15min</p>
            </router-link>
        </div>

         <div class="loginText">

                <!-- <li>
          <i id="loginIcon" class="material-icons">account_circle</i>
          Login
                </li>-->
           
                    <router-link class="link addRecipe"  to="/addRecipe">
                        <i class="material-icons">add_circle</i>
                        <p> Recipe</p>
                    </router-link>
                
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbarWrapper {
    font-size: 20px;
    display: flex;
    justify-content: center;
    color: green;
    height: 110px;
    width: 100vw;
    background-color: whitesmoke;
    margin-bottom: 5px;
    position: fixed;
    z-index: 100;
    border-bottom: 3px solid white;

    /*
    #79D76F
    #8ACD83
     */
}

.textHeader {
    font-family: "PT-Sans",;
    display: flex;
    /* flex: 2; */
    justify-content: center;
    align-items: center;
    /* margin-left: -15%; */
}

.loginText, .addRecipe {
    display: flex;
    justify-content: center;
    align-items: center; 
    position: fixed;
    right: 100px;
    top: 140px;
}


.link {
    text-decoration: none;
    color:coral;
}

.subHeader {
    color: grey;
    font-size: 14px;
    margin-left: 20px;
}


</style>
