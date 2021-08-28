<template>
  <div >
     <p>标题：{{blog.title}}</p>
     <p>发布于：</p>
    <div v-html="blog.body"></div>
  </div>
</template> 
<script>
	
export default { 
  data () {
    return {
      blog:{}
    }
  },
 
  mounted(){
 
    // this.$http.get('/api/interface/blogs/show?id='+this.$route.query.id).then(
    this.$http.get('/api/interface/blogs/show?id='+this.$route.params.id).then(
      (response) =>{
              console.info(response.body)
              this.blog = response.body.result

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
