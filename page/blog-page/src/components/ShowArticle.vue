<template>
  <div class="article">
    <div class="article-title">{{ articleInfo.title }}</div>
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
            <vue-markdown :source="mdContent" class="markdown-body"/>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown'
import 'github-markdown-css/github-markdown.css'
export default {
  props: ['article'],
  name: 'ShowArtlcle',
  data () {
    return {
      articleInfo: {},
      contentUrl: '',
      mdContent: ''
    }
  },
  components: {
    VueMarkdown
  },
  created () {
    console.log(this.$route.params.id)
    axios.get('/queryBlogById', {
      baseURL: 'http://localhost:5000',
      params: {
        id: this.$route.params.id
      }
    }).then(res => {
      this.articleInfo = res.data.data[0]
      this.contentUrl = res.data.data[0].content
      axios.get(this.contentUrl).then(res => {
        this.mdContent = res.data
        console.log(this.mdContent)
      })
    })
  }
}
</script>

<style lang="less" scoped>
@import url("~@/css/ShowArticle");
</style>
