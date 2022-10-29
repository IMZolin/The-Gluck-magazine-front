<template>
  <form class="form-signin" @submit.prevent="submit">
    <!--    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input v-model="data.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input v-model="data.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <router-link class="signup-link" href="#" to="/signup">Create a new account</router-link>
  </form>
</template>

<style>
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
<script>


import {useRouter} from "vue-router";
import {reactive} from "vue";
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  setup(){
    // eslint-disable-next-line no-unused-vars
    const data = reactive({
      email:'',
      password:''
    });
    // eslint-disable-next-line no-unused-vars
    const router = useRouter();
    // eslint-disable-next-line no-unused-vars
    const submit = async() =>{
      await axios.post('http://localhost:8080/api/auth/login',data);
      axios.defaults.headers.common['Authorization'] = 'Bearer ${response.data}';
      await router.push('/');
    }
    return{
      data,
      submit
    }
  }
}
</script>
