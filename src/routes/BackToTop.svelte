<script>
    export let showOnPx = 150;
    let hidden = true;
  
    function goTop() {
      document.body.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        }
      );
    }
  
    function scrollContainer() {
      return document.documentElement || document.body;
    }
  
    function handleOnScroll() {
      if (!scrollContainer()) {
        return;
      }
  
      if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
      } else {
        hidden = true;
      }
    }
  </script>
  
  <style>
    .back-to-top {
      opacity: 1;
      transition: opacity 0.5s, visibility 0.5s;
      position: fixed;
      z-index: 9998;
      right: 20px;
      user-select: none;
      bottom: 20px;
    }

    .scroll-to-top {
        width: 50px;
        height: 50px;
        line-height: 50px;
        background: rgba(241, 117, 34, 1);
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  
    .back-to-top.hidden {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  
  <svelte:window on:scroll={handleOnScroll} />
  
  <button class="back-to-top scroll-to-top" on:click={goTop} class:hidden>
    <img
            src="src/lib/images/arrow-down-double.svg"
            alt="arrow-down-double"
            width="39"
            height="40"
            class="max-sm:w-[19px] max-sm:h-[19px]"
            />
</button>