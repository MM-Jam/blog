<template>
  <div class="blog-lists">
      <div class="container">
          <div v-for="item in list" :key="item.id" class="blog-item">
              <div class="item-line">
                <router-link :to="{path:'/article/'+item.id}">
                    <div class="item-title">{{ item.title }}</div>
                </router-link>
                <div class="item-utime">发布于 {{ item.ctime }}</div>
              </div>
                <router-link :to="{path:'/article/'+item.id}">
                    <p>{{ item.introduction }}</p>
                </router-link>
                <div class="item-aside">
                  <router-link :to="{path:'/'+item.tag}">
                    <span class="item-tag">【{{ item.tag }}】</span>
                  </router-link>
                  <router-link :to="{path:'/article/'+item.id}">
                      <span class="item-all">阅读全文</span>
                  </router-link>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLists',
  props: ['list'],
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import url('~@/css/BlogLists.less');
</style>
