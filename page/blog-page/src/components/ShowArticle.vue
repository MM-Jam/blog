<template>
  <div class="article">
    <h1>{{ articleInfo.title }}</h1>
    <div class="article-aside">
        <span>发布日期：{{articleInfo.ctime}}</span><span>更新日期：{{articleInfo.utime}}</span>
        <span>分类：
            <router-link :to="{path:'/'+articleInfo.tag}">
                {{articleInfo.tag}}
            </router-link>
        </span>
    </div>
    <div class="article-content">
        <div class="md-body">
            {{articleInfo.content}}
        </div>
    </div>
    <div class="article-over">完</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['article'],
  name: 'ShowArtlcle',
  data () {
    return {
      articleInfo: {},
      contentUrl: ''
    }
  },
  created () {
    console.log(this.$route.params.id)
    axios.get('/queryBlogById', {
      baseURL: 'http://localhost:5000',
      params: {
        id: this.$route.params.id
      }
    }).then(res => {
      // console.log(res)
      this.contentUrl = res.data.data[0].content
      axios.get(this.contentUrl).then(res => {
        console.log('c', res)
      })
    })
  }
}
</script>

<style lang="less" scoped>
@import url("~@/css/ShowArticle");
</style>
