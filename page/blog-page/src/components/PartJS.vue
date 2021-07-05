<template>
  <div class="part-js">
      <blog-lists :list="blogLists"/>
  </div>
</template>

<script>
import BlogLists from '@/components/BlogLists'
import axios from 'axios'
export default {
  name: 'PartJS',
  data () {
    return {
      blogLists: []
    }
  },
  components: {
    BlogLists
  },
  created () {
    axios.get('/queryBlogsByTag', {
      baseURL: 'http://localhost:5000',
      params: {
        tag: 'JS'
      }
    }).then(res => {
      console.log('b', res)
      this.blogLists = res.data.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
