<template>
  <div class="home">
      <blog-lists :list="blogLists"/>
  </div>
</template>

<script>
import axios from 'axios'
import BlogLists from '@/components/BlogLists'
export default {
  name: 'Home',
  data () {
    return {
      blogLists: []
    }
  },
  components: {
    BlogLists
  },
  created () {
    axios.get('/queryAllBlogs', {
      baseURL: 'http://localhost:5000'
    }).then(res => {
      this.blogLists = res.data.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
