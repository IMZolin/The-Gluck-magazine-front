<template>
  <main class="container">
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">Hello {{message}}</h1>
        <p class="lead my-3">Everything you can imagine is real</p>
      </div>
    </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Card/>
        <Card/>
        <Card/>
      </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <Card/>
      <Card/>
      <Card/>
    </div>
  </main>
</template>

<script>
import Card from "./../components/Card";
import axios from "axios";
import {onMounted,ref} from "vue";

export default {
  components: {Card},
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  setup(){
    const message = ref('No User');
    onMounted(async()=>{
      const {data} = await axios.get('http://localhost:8080/api/user');
      message.value = data.first_name;
    });
    return{
      message
    }
  }
}
</script>

<style scoped>
/*.container{
  top:10%;
}*/
/*.card-img-top{*/
/*  text-align: center;*/
/*}*/
/*.col {*/
/*  width: 30%;*/
/*}*/
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif/*rtl:Amiri, Georgia, "Times New Roman", serif*/;
}

.display-4 {
  font-size: 2.5rem;
}
@media (min-width: 768px) {
  .display-4 {
    font-size: 3rem;
  }
}

.flex-auto {
  flex: 0 0 auto;
}

.h-250 { height: 250px; }
@media (min-width: 768px) {
  .h-md-250 { height: 250px; }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 4rem;
}
.blog-post-title {
  font-size: 2.5rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #727272;
}
</style>