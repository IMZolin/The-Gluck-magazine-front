<template>
  <form class="form-signin" @submit.prevent="submit">
    <!--    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
    <h1 class="h3 mb-3 font-weight-normal">Recover password</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ForgotPassword"
}
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin:auto;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
</style>