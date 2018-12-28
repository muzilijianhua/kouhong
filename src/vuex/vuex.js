import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//当加载main.js会调用下面的js
var car = JSON.parse(localStorage.getItem('car') || '[]')
export default new Vuex.Store({
    state: {

        car: car
    },
    mutations: {
        addcars(state, goodinfo) {

            var flag = false;

            state.car.some(item => {
                if (item.id == goodinfo.id) {
                    item.num += parseInt(goodinfo.num)
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.car.push(goodinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        remove(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        getallnum(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.num
            })
            return c
        }
    }
})