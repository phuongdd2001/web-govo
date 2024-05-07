<script lang="ts">
  import { page } from "$app/stores";
  import { srcollToId } from "$lib/core/data";
  import { Menu } from "$lib/core/data/data";

  let menu = Menu;
  let openMenuMobile = false;

</script>

<header id="header" class="max-lg:h-[20px]">
  <div
    class=" bg-colorActive py-[15px] w-full z-[9999] fixed top-0 max-lg:py-[0px]"
  >
    <div
      class="flex items-center justify-between lg:container lg:mx-auto lg:px-[15px]
        max-lg:justify-end"
    >
      <div
        class="header-logo max-lg:absolute
      max-lg:right-[50%] max-lg:translate-x-[50%]
      "
      >
        <a href="/">
          <img
          src="src/lib/images/logo_header.png"
          alt="Govo Vietnam"
          title="Govo Vietnam"
          width="244"
          height="50"
          class="cursor-pointer max-lg:h-[18px] max-lg:w-[98px]"
        />
        </a>
      </div>
      <div class="max-lg:hidden">
        <nav id="nav">
          <ul
            id="navigation"
            class="flex items-center justify-center gap-x-[56px]"
          >
            {#each menu as item}
              <li class="nav-item">
                <a
                href="#{item.link}"
                  on:click|preventDefault={() => { openMenuMobile = false;; srcollToId(item.link, $page.url.pathname)}}
                  class="leading-[44px] text-white text-lg font-medium cursor-pointer"
                  >{item.title}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </div>
      <div class="hidden max-lg:block">
        <button class="cursor-pointer w-[40px] h-[40px] flex items-center justify-center" on:click={() => (openMenuMobile = !openMenuMobile)}
            ><img
                src="src/lib/images/menu.svg"
                alt="Menu "
                title="Menu"
        /></button>
      </div>
    </div>
    {#if openMenuMobile}
    <div class="relative z-[9999]">
      <ul class="absolute w-full bg-[#181818] flex justify-center flex-col items-center gap-y-6 py-6">
        {#each menu as item}
        <li class="nav-item">
          <a
          href="#{item.link}"
            on:click|preventDefault={() => { openMenuMobile = false;; srcollToId(item.link, $page.url.pathname)}}
            class="leading-[24px] text-white text-[16px] font-medium cursor-pointer"
            >{ item.title }
          </a>
        </li>
        {/each}
      </ul>
    </div>
    {/if}
    
  </div>
</header>
