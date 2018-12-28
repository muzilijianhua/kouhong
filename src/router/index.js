import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/tabbar/home.vue'
import shopcar from '../components/tabbar/shopcar.vue'
import search from '../components/tabbar/search.vue'
import myself from '../components/tabbar/myself.vue'
import newslist from '../components/new/newslist.vue'
import newsinfo from '../components/new/newsinfo.vue'
import photolist from '../components/photo/photolist.vue'
import recommend from '../components/subphoto/recommend.vue'
import hot from '../components/subphoto/hot.vue'
import beijing from '../components/subphoto/beijing.vue'
import Sociology from '../components/subphoto/Sociology.vue'
import entertainment from '../components/subphoto/entertainment.vue'
import Express from '../components/subphoto/Express.vue'
import game from '../components/subphoto/game.vue'
import photoinfo from '../components/photo/photoinfo.vue'
import goodlist from '../components/goods/goodlist.vue'
import goodinfo from '../components/goods/goodinfo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: "/home"
        }, {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: shopcar
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/myself',
            name: 'myself',
            component: myself
        },
        {
            path: '/home/newslist',
            name: 'newslist',
            component: newslist
        },
        {
            path: '/home/newsinfo/:id',
            name: 'newsinfo',
            component: newsinfo
        },
        {
            path: '/home/photolist',
            component: photolist,
            children: [
                { path: 'recommend', component: recommend },
                { path: '/', redirect: 'recommend' },
                { path: 'hot', component: hot },
                { path: 'beijing', component: beijing },
                { path: 'Sociology', component: Sociology },
                { path: 'entertainment', component: entertainment },
                { path: 'Express', component: Express },
                { path: 'game', component: game },
            ]
        },
        {
            path: '/home/photoinfo/:id',
            name: 'photoinfo',
            component: photoinfo
        },
        {
            path: '/home/goodlist',
            name: 'goodlist',
            component: goodlist
        },
        {
            path: '/home/goodinfo/:id',
            name: 'goodinfo',
            component: goodinfo
        },

    ],
    linkActiveClass: "mui-active"
})