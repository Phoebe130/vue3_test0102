<!-- 寫js用的地方 -->
<script>
// import { RouterView } from 'vue-router'

export default {
  data() {
    return {
      count: 0,
    }
  }
  // // 元件宣告
  // components: {
  //   RouterView
  // },
}
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br>
    <router-link to="/calc">calc</router-link>
  </nav>
  <!-- <router-view /> -->


  <header>
    <!-- 頁首 -->
  </header>

  <main>
    <!-- {{ count }}
    <div>
      <button type="button" @click="count++">++</button>
    </div> -->
    <router-view />
  </main>
  <footer>
    <!-- 頁尾 -->
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
