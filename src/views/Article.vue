<template>
  <main>
    <div>
      <div class="scroll-line"></div>
      <h1>Example article</h1>
<!--      <p><em>Want an explanation of how this works?<br />&rarr; <a href="https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/" target="_top">https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/</a></em></p>-->
      <section id="introduction">
        <h2>Chapter 1</h2>
        <p>…</p>
      </section>
<!--      <section id="request-response">
        <h2>Request &amp; Response</h2>
        <p>…</p>
      </section>-->
      <section id="authentication">
        <h2>Chapter 2</h2>
        <p>…</p>
      </section>
      <section id="endpoints">
        <h2>Chapter 3</h2>
        <section id="endpoints--root">
          <h3>Root</h3>
          <p>…</p>
        </section>
        <section id="endpoints--cities-overview">
          <h3>Chapter 4</h3>
          <p>…</p>
        </section>
        <section id="endpoints--city-detail">
          <h3>Chapter 5</h3>
          <p>…</p>
        </section>
        <section id="endpoints--city-config">
          <h3>Chapter 6</h3>
          <p>…</p>
        </section>
        <section id="endpoints--city-spots-overview">
          <h3>Chapter 7</h3>
          <p>…</p>
        </section>
        <section id="endpoints--city-spot-detail">
          <h3>Chapter 8</h3>
          <p>…</p>
        </section>
        <section id="endpoints--city-icons-overview">
          <h3>Chapter 9</h3>
          <p>…</p>
        </section>
        <section id="endpoints--city-icon-detail">
          <h3>Chapter 10</h3>
          <p>…</p>
        </section>
      </section>
      <section id="links">
        <h2>Links</h2>
        <p>…</p>
      </section>
      <section id="expanders">
        <h2>Expanders</h2>
        <p>…</p>
      </section>
      <section id="filters">
        <h2>Filters</h2>
        <p>…</p>
      </section>
    </div>
    <nav class="section-nav">
      <ol>
        <li><a href="#introduction">Chapter 1</a></li>
        <li><a href="#authentication">Chapter 2</a></li>
        <li><a href="#endpoints">Chapter 3</a>
          <ul>
            <li class=""><a href="#endpoints--root">Chapter 3.1</a></li>
            <li class=""><a href="#endpoints--cities-overview">Chapter 3.2</a></li>
            <li class=""><a href="#endpoints--city-detail">Chapter 3.3</a></li>
            <li class=""><a href="#endpoints--city-config">Chapter 3.4</a></li>
            <li class=""><a href="#endpoints--city-spots-overview">Chapter 3.5</a></li>
            <li class=""><a href="#endpoints--city-spot-detail">Chapter 3.6</a></li>
            <li class=""><a href="#endpoints--city-icons-overview">Chapter 3.7</a></li>
            <li class=""><a href="#endpoints--city-icon-detail">Chapter 3.8</a></li>
          </ul>
        </li>
        <li class=""><a href="#links">Links</a></li>
        <li class=""><a href="#expanders">Expanders</a></li>
        <li class=""><a href="#filters">Filters</a></li>
      </ol>
    </nav>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Article"
}
// eslint-disable-next-line no-undef
// $(window).scroll(function(){
//   // eslint-disable-next-line no-undef
//   var wintop, docheight, winheight;
//   // eslint-disable-next-line no-undef
//   wintop = $(window).scrollTop();
//   // eslint-disable-next-line no-undef
//   docheight = $(document).height();
//   // eslint-disable-next-line no-undef
//   winheight = $(window).height();
//   var scrolled = (wintop/(docheight-winheight))*100;
//
//   // eslint-disable-next-line no-undef
//   $('.scroll-line').css('width', (scrolled + '%'));
// });
// window.addEventListener('DOMContentLoaded', () => {
//
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const id = entry.target.getAttribute('id');
//       if (entry.intersectionRatio > 0) {
//         document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
//       } else {
//         document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
//       }
//     });
//   });
//
//   // Track all sections that have an `id` applied
//   document.querySelectorAll('section[id]').forEach((section) => {
//     observer.observe(section);
//   });
//
// });
</script>

<style scoped>
/* 1. Enable smooth scrolling */
html {
  scroll-behavior: smooth;
}
.scroll-line{
  height: 2px;
  margin-bottom: -2px;
  background: blue;
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

}

/* 2. Make nav sticky */
main > nav {
  position: sticky;
  top: 2rem;
  align-self: start;
}

/* 3. ScrollSpy active styles (see JS tab for activation) */
.section-nav li.active > a {
  color: #333;
  font-weight: 500;
}

/* Sidebar Navigation */
.section-nav {
  padding-left: 0;
  border-left: 1px solid #efefef;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: .125rem 0;
  color: #ccc;
  transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
}

.section-nav a:hover,
.section-nav a:focus {
  color: #666;
}

/** Poor man's reset **/
* {
  box-sizing: border-box;
}

html, body {
  background: #fff;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-left: 1rem;
}

h1 {
  font-weight: 300;
}

/** page layout **/
main {
  display: grid;
  grid-template-columns: 1fr 15em;
  max-width: 100em;
  width: 90%;
  margin: 0 auto;
}

/** enlarge the sections for this demo, so that we have a long scrollable page **/
section {
  padding-bottom: 20rem;
}
</style>