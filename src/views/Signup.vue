<template>
  <form class="form-signin" @submit.prevent="submit">
    <!--    <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">-->
    <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
    <label for="inputEmail" class="sr-only">Username</label>
    <input v-model="data.username" type="text" id="inputEmail" class="form-control" placeholder="Username" required autofocus>
    <label for="inputEmail" class="sr-only">First name</label>
    <input v-model="data.first_name" type="text" id="inputEmail" class="form-control" placeholder="First name" required autofocus>
    <label for="inputEmail" class="sr-only">Last name</label>
    <input v-model="data.last_name" type="text" id="inputEmail" class="form-control" placeholder="Last name" required autofocus>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input v-model="data.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input v-model="data.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <label for="inputPassword" class="sr-only">Confirm password</label>
    <input v-model="data.passwordConfirm" type="password" id="inputPassword" class="form-control" placeholder="Confirm password" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
  </form>
</template>

<script lang="js">
import {reactive} from "vue";
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import {useRouter} from "vue-router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  setup(){
    // eslint-disable-next-line no-unused-vars
    const data = reactive({
      username:'',
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      passwordConfirm:''
    });
    // eslint-disable-next-line no-unused-vars
    const router = useRouter();
    // eslint-disable-next-line no-unused-vars
    const submit = async() =>{
      await axios.post('http://localhost:8080/api/signup',data);
      await router.push('/login');
    }
    return{
      data,
      submit
    }
  }
}
</script>
