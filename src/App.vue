<template>
    <Nav />
    <router-view/>
    <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  components: {Footer, Nav},
  computed: {
    $store: "/store",
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      navigation: null,
    };
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
}
</script>