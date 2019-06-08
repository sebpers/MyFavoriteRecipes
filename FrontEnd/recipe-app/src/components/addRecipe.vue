<template>
    <div class="wrap">
        <h1>Add recipe</h1>
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                </tr>
                <td>
                    <input type="text">
                </td>
                <tr>
                    <th>name</th>
                </tr>
                <td>
                    <input type="text">
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
                    <input type="text">
                </td>
                <tr>
                    <th>description</th>
                </tr>
                <td>
                    <textarea name id cols="30" rows="10"></textarea>
                </td>
                <tr>
                    <button id="add" @click="addRecipe()">Add Recipe</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {};
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
