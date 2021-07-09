<script setup lang="jsx">
import HelloWorld from 'comps/HelloWorld.vue'
import logo from './assets/logo.png'
import { defineComponent } from 'vue'
export default defineComponent({
  render: () => {
    ;<>
      <img alt='Vue Logo' src={logo} />
      <HelloWorld msg='Hello Vue3 + vite'></HelloWorld>
    </>
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
