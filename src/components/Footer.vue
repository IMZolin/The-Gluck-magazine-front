<template>
  <footer class="blog-footer">
    <p>© 2022 Журнал "The Gluck" <a data-goto=".container"></a>,<a href="https://github.com/IMZolin">Ivan Zolin</a> Все права защищены.</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped>
/*
 * Footer
 */
.blog-footer {
  padding: 2.5rem 0;
  color: #727272;
  text-align: center;
  background-color: #f9f9f9;
  border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}
</style>