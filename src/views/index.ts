import layout from '../layout/index'
import example from './example/index'

let sharedRouter = {
  path: '/',
  name: '',
  component: layout.getDefaultLayout(),
  children: [
    example
  ]
}

let routes = [sharedRouter]

export default routes
