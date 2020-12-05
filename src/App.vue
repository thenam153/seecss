<template>
  <div id="app" >  
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import { NavBar } from './components/index'
export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>
<style lang="less">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* display: flex; */
    height: 100vh;
    width: 100vw;
    display: flex;

  }
  body{
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
   
  }
  * {
    font-family: Roboto !important;
   font-size: 13px  !important;
  }
 
</style>