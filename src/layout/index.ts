import defaulted from './default/index.vue'
import authorized from './authorized/index.vue'

let getDefaultLayout = () => {
  return defaulted
}

let getAuthorizedLayout = () => {
  return authorized
}

export default {
  getDefaultLayout,
  getAuthorizedLayout
}