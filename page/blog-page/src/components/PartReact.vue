<template>
  <div class="part-react">
      <blog-lists :list="blogLists"/>
  </div>
</template>

<script>
import BlogLists from '@/components/BlogLists'
import axios from 'axios'
export default {
  name: 'PartReact',
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
        tag: 'React'
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
