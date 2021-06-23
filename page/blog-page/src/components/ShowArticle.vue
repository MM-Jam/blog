<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <div class="article-aside">
        <span>发布日期：{{article.ctime}}</span><span>更新日期：{{article.utime}}</span>
        <span>分类：
            <router-link :to="{path:'/'+article.tag}">
                {{article.tag}}
            </router-link>
        </span>
    </div>
    <div class="article-content">
        <div class="md-body">
            {{article.content}}
        </div>
    </div>
    <div class="article-over">完</div>
  </div>
</template>

<script>
export default {
  props: ['article'],
  name: 'ShowArtlcle'
}
</script>

<style lang="less" scoped>
@import url("~@/css/ShowArticle");
</style>
