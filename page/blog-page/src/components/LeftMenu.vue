<template>
  <div class="leftMenu">
      <el-row class="aside-message">
          <div class="avatar">
            <img src="@/assets/icon.jpg" alt="">
          </div>
          <div class="name">MM-Jam</div>
      </el-row>
      <el-row>
          <ul class="aside-buttons">
            <li class="home">
              <router-link to='/'>
                <i class="iconfont icon-home"></i>
                <span>首页</span>
              </router-link>
            </li>
            <li class="js">
              <router-link to='/js'>
                <i class="iconfont icon-js"></i>
                <span>JS</span>
              </router-link>
            </li>
            <li class="react">
              <router-link to="/react">
                <i class="iconfont icon-react"></i>
                <span>React</span>
              </router-link>
            </li>
            <li class="vue">
              <router-link to='/vue'>
                <i class="iconfont icon-vue"></i>
                <span>Vue</span>
              </router-link>
            </li>
          </ul>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import url('~@/css/LeftMenu.less');
</style>
