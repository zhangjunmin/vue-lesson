import Vue from 'vue'
import VueRouter from 'vue-router'
import components from './components/index'
import util from './util'

Vue.use(VueRouter)
// router?
export default new VueRouter({
    routes: components.map((c, i)=> {
        return {
            component: c,
            path: util.getPath(i)
        }
    })
})