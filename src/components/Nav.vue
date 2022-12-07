<template>
  <div class="container">
    <header class="blog-header lh-1 py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <!--        <div class="col-4 pt-1">-->
        <!--          <a class="link-secondary" href="#">Subscribe</a>-->
        <!--        </div>-->
        <div class="col-4 text-center">
          <router-link to="/" class="blog-header-logo text-dark" href="#">The Gluck</router-link>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <a class="link-secondary" href="#" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
          </a>
          <div>
            <router-link to="/login" class="btn btn-sm btn-outline-secondary" href="#">Login</router-link>
            <router-link to="/signup" class="btn btn-sm btn-outline-secondary" href="#">Sign up</router-link>
          </div>
          <div style="display: none">
            <router-link to="/profile" class="btn btn-sm btn-outline-secondary" href="#">Username</router-link>
            <router-link to="/logout" class="btn btn-sm btn-outline-secondary" href="#">Logout</router-link>
          </div>
        </div>
      </div>
    </header>

    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <a class="p-2 link-secondary" href="#">Literature</a>
        <a class="p-2 link-secondary" href="#">Culture</a>
        <a class="p-2 link-secondary" href="#">Travel</a>
        <a class="p-2 link-secondary" href="#">Design</a>
        <a class="p-2 link-secondary" href="#">Culture</a>
        <a class="p-2 link-secondary" href="#">Business</a>
        <a class="p-2 link-secondary" href="#">Politics</a>
        <a class="p-2 link-secondary" href="#">Opinion</a>
        <a class="p-2 link-secondary" href="#">Science</a>
        <a class="p-2 link-secondary" href="#">Health</a>
        <a class="p-2 link-secondary" href="#">Style</a>
        <a class="p-2 link-secondary" href="#">Travel</a>
      </nav>
    </div>
  </div>
</template>

<style>

/*header{
  position: fixed;
  z-index: 10;
  background: white;
  width: 60%
}
.nav-scroller{
  position: absolute;
  top:5%;
  text-align: center;
}*/
.blog-header {
  border-bottom: 1px solid #e5e5e5;
}
.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif/*rtl:Amiri, Georgia, "Times New Roman", serif*/;
  font-size: 2.25rem;
  color: #FFFF66;
}
.blog-header-logo:hover {
  text-decoration: none;
}
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
</style>

<script>
/*import {onMounted, ref} from 'axios'
import axios from 'axios'*/
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
  /*setup() {
    const auth = ref(false);
    onMounted(async () =>{
      try
      {
        await axios.get('http://localhost:8080/api/user');
        auth.value = true;
      }catch(e){
        auth.value = false;
      }
    });
  }*/

  /*methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
  },*/
}
</script>
