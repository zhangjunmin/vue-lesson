import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import router from './router'

Vue.use(ElementUI);

const root = document.createElement('div');
document.body.appendChild(root)
new Vue({
    router,
    render: h => h(App)
}).$mount(root)