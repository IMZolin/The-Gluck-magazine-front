<template>
<div class="container">
  <h1>Article editor</h1>
  <div class="editor">
    <div class="writer">
      <label for="inputEmail" class="sr-only">Title</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Article title" required autofocus>
      <label for="inputEmail" class="sr-only">Tags</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Article tags" required autofocus>
      <label for="inputEmail" class="sr-only">Description</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Description" required autofocus>
      <label for="inputEmail" class="sr-only">Text</label>
      <textarea type="email" id="inputEmail" class="form-control" placeholder="Article text" required autofocus></textarea>

    </div>
    <div class="result">
    </div>
  </div>
</div>
<!--  For init-->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Editor"
}
</script>

<style scoped>

</style>