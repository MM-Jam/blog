<template>
  <div id="app">
    <el-container>
      <el-aside class="asidePart">
        <left-menu />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu'
export default {
  name: 'App',
  components: {
    LeftMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.asidePart{
    position: fixed;
    overflow-y: auto;
    width: 250px;
    height: 100%;
    background: #202020;
    color: #ccc;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>
