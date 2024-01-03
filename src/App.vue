<!-- 寫js用的地方 -->
<script>
import {RouterLink,RouterView } from 'vue-router'

export default {
  data() {
    return {
      count: 0,
    }
  },
  // 元件宣告
  components: {
    RouterLink,
    RouterView
  },
}
</script>

<template>
  <!-- 觀察設計稿，將共同的部分放在此頁 -->
  <nav>
    <router-link to="/" class="nav-link">Home</router-link>|
    <router-link to="/about" class="nav-link">About</router-link>|
    <router-link to="/calc" class="nav-link">Calc</router-link>|
    <router-link to="/todolist" class="nav-link">Todolist</router-link>
  </nav>
  <!-- <router-view /> -->


  <header>
    <!-- <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/calc">calc</a> -->
    <!-- 頁首 -->
  </header>

  <main>
    <!-- <div class="calc text-[30px]">我來自公版</div> -->

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

nav a.nav-link {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 8px; /* 調整右邊間距，使得分隔符號與連結之間有適當的間距 */
}

nav a.nav-link:last-child {
  margin-right: 0; /* 最後一個連結不需要右邊間距 */
}

nav a.nav-link.router-link-exact-active {
  color: #42b983;
}

</style>
