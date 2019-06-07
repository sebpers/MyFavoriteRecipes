import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/index.vue'
import addRecipe from '../components/addRecipe.vue'
import user from '../components/user'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: homePage
        },
         {
             path: '/addrecipe',
             name: 'addRecipe',
             component: addRecipe
         },
         {
             path: '/user',
             name: 'user',
             component: user
         },


    ]
})