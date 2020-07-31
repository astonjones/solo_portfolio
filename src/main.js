import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//fontawesome icons
import '@fortawesome/fontawesome-free/css/all.css'

//adds mixins.css
import '@/assets/css/mixins.css'

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
