<template>
  <div>
    <HelloWorld msg="hello vue3 + vite"></HelloWorld>
    <el-button>my button</el-button>
    <router-link to="/home/1">detail1</router-link>
    <router-link to="/home/2">detail2</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
</script>

<style scoped></style>
