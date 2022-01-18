<template>
  <div id="nav">
    <router-link to="/">Index</router-link> |
    <router-link to="/about">About Me</router-link> |
    <router-link to="/portfolio">Learning Portfolio</router-link> 
  </div>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  /* background-color: #eee; */
}
img {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #ddd;
  opacity: .8;
  position: sticky;
  top: 0;
  backdrop-filter: blur(100px);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.2rem;
  background-color: transparent;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
