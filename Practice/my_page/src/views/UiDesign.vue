<template>
  <h3 class="title_ui">UI design</h3>
  <div id="ui-nav">
    <router-link to="/portfolio/ui_design/form">表單</router-link> |
    <router-link to="/portfolio/ui_design/Spotlife">Spotlife</router-link> |
    <router-link to="/portfolio/ui_design/drinks">熊愛喝飲料</router-link> 
  </div>
  <router-view/>
</template>

<style scope>
h2 {
  margin: 60px;
}

#ui-nav {
  padding: 30px;
  opacity: .8;
}

#ui-nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2rem;
}

#ui-nav a.router-link-exact-active {
  color: #42b983;
}
</style>