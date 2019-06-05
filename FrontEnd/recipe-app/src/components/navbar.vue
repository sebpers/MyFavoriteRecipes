<template>
  <div class="navbarWrapper">
    <div class="textHeader">
        <h1>Vegan & Vegetarian Recipies</h1>
    </div>
    <div class="loginText">
      <ul>
        <li>
          <i id="loginIcon" class="material-icons">account_circle</i>
          Login
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .navbarWrapper {
    font-size: 23px;
    display: flex;
    justify-items: center;
    color: green;
    height: 70px;
    width: 100vw;
    background-color: whitesmoke;
    margin-bottom: 5px;

    /*
    #79D76F
    #8ACD83
     */
  }

.textHeader {
  font-family: 'Alex Brush', cursive;
  display: flex;
  flex: 2;
  justify-content: flex-end;
  align-items: center;
  margin-left: -15%;
}

.loginText {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1
}

ul {
  list-style-type: none;
}

li {
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 120px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

</style>
