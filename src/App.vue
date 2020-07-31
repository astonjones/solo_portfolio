<template>
  <div>
    <!-- <h1>This is the home page of my app</h1> -->
    <NavBar/>
    <Header />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Header
  }
}
</script>

<style>

</style>
