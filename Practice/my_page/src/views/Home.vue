<template>
  <div class="home">
    <img alt="home image" src="https://picsum.photos/id/345/1200/800">
    <HelloWorld msg="嗨，我是 林育賢"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    object-fit: cover;
    opacity: .3;
    z-index: -1;
  }
</style>