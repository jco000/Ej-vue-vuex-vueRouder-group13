import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import waiter from './waiter'
import customer from './customer'
import comment from './comment'
import product from './product'
import category from './category'
import order from './order'
import address from './address'
import address from './user'



Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  waiter,
  customer,
  address,
  category,
  comment,
  product,
  order,
  user
})

export default store