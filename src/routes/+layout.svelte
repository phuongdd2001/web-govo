<script>
  import "../app.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import BackToTop from "./BackToTop.svelte";
</script>

<svelte:head>
		<style>
			@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
		</style>
	</svelte:head>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
  <Footer/>
</div>
<BackToTop />