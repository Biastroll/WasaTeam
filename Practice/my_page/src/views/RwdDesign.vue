<template>
  <h3 class="title_rwd">RWD - HTML + CSS</h3>
  <div id="rwd-nav">
    <router-link to="/portfolio/rwd_design/rwd_layout">Layout</router-link> |
    <router-link to="/portfolio/rwd_design/rwd_fluid">流動式版面</router-link> |
    <router-link to="/portfolio/rwd_design/rwd_hamburger">漢堡選單</router-link> 
  </div>
  <router-view/>
</template>

<style scope>
h2 {
  margin: 60px;
}

#rwd-nav {
  padding: 30px;
  opacity: .8;
}

#rwd-nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2rem;
}

#rwd-nav a.router-link-exact-active {
  color: #42b983;
}
</style>