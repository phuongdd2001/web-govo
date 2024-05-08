<script>
  import "../app.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import BackToTop from "./BackToTop.svelte";
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
  <Footer/>
</div>
<BackToTop />