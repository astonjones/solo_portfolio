import Vue from 'vue'
import App from './App.vue'

//adds mixins.css
import '@/assets/css/mixins.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
