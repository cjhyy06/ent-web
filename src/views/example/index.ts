import authorized from '../../layout/authorized/index.vue'
export default {
  path: "/",
  name: "",
  component: authorized,
  children: [
    {
      path: "/example",
      name: "example",
      component: import('./index.vue')
    }
  ]
}