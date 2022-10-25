<template>
  <main class="container">
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">Hello</h1>
        <p class="lead my-3">The slogan of The Gluck magazine</p>
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
export default {
  components: {Card},
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main"
}
</script>

<style scoped>
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