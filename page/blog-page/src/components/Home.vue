<template>
  <div class="home">
      <blog-lists :list="blogLists"/>
  </div>
</template>

<script>
import BlogLists from '@/components/BlogLists'
export default {
  name: 'Home',
  data () {
    return {
      blogLists: [
        {
          id: 1,
          title: 'Promise A+ 规范和解读',
          introduction: '一开始，我想的是把 Promise A+ 的规范原文翻译过来即可 可是认真的看了一下原文，发现有些内容直接翻译过来不是特别容易理解 因此，决定对规范进行核心部分的翻译，然后再对其进行解读',
          tag: 'JS',
          utime: '2021-6-23'
        },
        {
          id: 2,
          title: 'Promise A+ 规范和解读',
          introduction: '一开始，我想的是把 Promise A+ 的规范原文翻译过来即可 可是认真的看了一下原文，发现有些内容直接翻译过来不是特别容易理解 因此，决定对规范进行核心部分的翻译，然后再对其进行解读',
          tag: 'JS',
          utime: '2021-6-23'
        }
      ]
    }
  },
  components: {
    BlogLists
  }
}
</script>
