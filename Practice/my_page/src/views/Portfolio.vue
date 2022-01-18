<template>
  <h2 class="works_title">練習作品</h2>
  <div id="portfolio-nav">
    <router-link to="/portfolio/rwd_design">RWD Design</router-link> |
    <router-link to="/portfolio/javascript">JavaScript</router-link> |
    <router-link to="/portfolio/ui_design">UI Design</router-link> 
  </div>
  <router-view/>
</template>

<style scope>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
h2 {
  margin: 60px;
}

#portfolio-nav {
  padding: 30px;
  opacity: .8;
}

#portfolio-nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2rem;
}

#portfolio-nav a.router-link-exact-active {
  color: #42b983;
}
</style>