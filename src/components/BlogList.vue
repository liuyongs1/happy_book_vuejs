 
<template>
  <div >
    sfafasfsdfafs
    <a href="http://localhost:8080/api/interface/blogs/all">aaaaaaa</a>
    <a href="http://siwei.me/api/interface/blogs/all">bbbbbb</a>
      <table>
          <tr v-for="blog in blogs">
              <!-- <td @click='show_blog(blog.id)'> -->
              <td >
                 <router-link :to="{name:'Blog',query:{id:blog.id}}">BBBBBBB</router-link>
    <router-link :to="{path:'/blog',query:{id:blog.id}}">DDDDDD</router-link>
    <router-link :to="{name:'Blog2',params:{id:2303}}">{{blog.id}}</router-link>
   
              </td>
              <td>{{blog.title}}</td>
          </tr>
      </table>
       
  </div>
</template>
 
<script>
	
export default { 
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      blogs: [ 
				],
      blog:{} 
    }
  },
  methods:{
    show_blog:function(blog_id){
      this.$router.push({name:'Blog',query:{id:blog_id}})
      // this.$router.push({path:'/blog',query:{id:blog_id}})
    }
  },
  mounted(){
    this.$http.get('/api/interface/blogs/all').then(
      (response) =>{
              console.info(response.body)
              this.blogs = response.body.blogs

          },(response) =>{
              console.error(response)
          }
      );
     
      // this.$http.post('/api/interface/blogs/show',{id:'1244' }).then(
      // (response) =>{
      //         console.info(response.body)
      //         this.blogs = response.body.blogs

      //     },(response) =>{
      //         console.error(response)
      //     }
      // );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  border-bottom: 1px solid grey;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
