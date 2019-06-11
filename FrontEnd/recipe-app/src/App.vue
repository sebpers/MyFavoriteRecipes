<template>
    <div id="app">
        <navbar></navbar>

        <router-view class="router"/>
    </div>
</template>

<script>
import navbar from "./components/navbar";

export default {
    name: "app",
    components: {
        navbar
    }
};
</script>

<style>
#app {
    font-family: "PT-Sans", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    /* background-color: #8acd83; */
    height: 100vh;
    background-color: whitesmoke;

}
.router {
    margin-top: 70px;
}
</style>
