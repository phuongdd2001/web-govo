<script lang="ts">
  import { Menu } from "$lib/core/data/data";

  let menu = Menu;
  let email = "contact@govo.tech";

  function scrollIntoView({ target }: any) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<footer>
  <div
    class="bg-[#F8F8F8] pt-[34px] pb-[56px] relative max-sm:pt-[18px] max-sm:pb-[18px]"
  >
    <div class="container mx-auto px-[15px] max-sm:px-[12px]">
      <div
        class="grid grid-cols-3 gap-x-[148px] pb-[32px] mb-[32px] border-b border-[#e3e3e3] border-dashed max-lg:gap-x-[74px] max-sm:grid-flow-row-dense max-sm:grid-cols-2 max-sm:gap-x-[72px] max-sm:gap-y-[12px] max-sm:pb-[12px] max-sm:mb-[12px]"
      >
        <div
          class="max-sm:col-span-2 flex items-center max-sm:justify-center max-sm:items-start"
        >
          <a href="/" class="cursor-pointer">
            <img
              src="src/lib/images/govo_tech_icon.png"
              alt="Govo tech"
              title="Govo tech"
              width="172"
              height="35"
              class="max-sm:h-[25px] max-sm:w-[123px]"
            />
          </a>
        </div>
        <div class="max-sm:col-span-1">
          <div>
            <p
              class="leading-[24px] text-black text-[16px] font-medium mb-[8px] max-sm:text-[10px] max-sm:leading-[15px] max-sm:mb-[5px]"
            >
              Follow us on
            </p>
            <div class="flex items-center gap-x-[32px] max-sm:gap-x-[21px]">
              <a
                href="#/"
                class="cursor-pointer w-[40px] h-[40px] flex items-center justify-center bg-black/[8%] transition duration-300 ease-in-out rounded-full bt-action max-sm:w-[26px] max-sm:h-[26px]"
                ><img
                  src="src/lib/images/fb.svg"
                  alt="Facebook Govo"
                  title="Facebook Govo"
                  width="22"
                  height="22"
                  class="max-sm:w-[14px] max-sm:h-[14px]"
                /></a
              >
              <a
                href="#/"
                class="cursor-pointer w-[40px] h-[40px] flex items-center justify-center bg-black/[8%] transition duration-300 ease-in-out rounded-full bt-action max-sm:w-[26px] max-sm:h-[26px]"
                ><img
                  src="src/lib/images/insta.svg"
                  alt="Instagram Govo"
                  title="Instagram Govo"
                  width="22"
                  height="22"
                  class="max-sm:w-[14px] max-sm:h-[14px]"
                /></a
              >
              <a
                href="#/"
                class="cursor-pointer w-[40px] h-[40px] flex items-center justify-center bg-black/[8%] transition duration-300 ease-in-out rounded-full bt-action max-sm:w-[26px] max-sm:h-[26px]"
                ><img
                  src="src/lib/images/Youtube.svg"
                  alt="Youtube Govo"
                  title="Youtube Govo"
                  width="22"
                  height="22"
                  class="max-sm:w-[14px] max-sm:h-[14px]"
                /></a
              >
            </div>
          </div>
        </div>
        <div class="max-sm:col-span-1">
          <div>
            <p
              class="leading-[24px] text-black text-[16px] font-medium mb-[8px] max-sm:text-[10px] max-sm:leading-[15px] max-sm:mb-[5px]"
            >
              Download app on
            </p>
            <a
              href="https://play.google.com/store/apps/dev?id=8737102155398054550"
              target="_blank"
              class="cursor-pointer inline-block border-[0.5px] border-[#e3e3e3] rounded-full duration-300 ease-in-out hover:border-colorActive"
              ><img
                src="src/lib/images/footer_google_play.png"
                alt="Store Govo"
                title="Store Govo"
                width="140"
                height="40"
                class="max-sm:w-[88px] max-sm:h-[24px]"
              /></a
            >
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-x-[148px] max-sm:gap-x-[4px] max-lg:gap-x-[74px]"
      >
        <div>
          <h2
            class="uppercase text-black text-[18px] leading-[27px] mb-[16px] font-bold max-sm:text-[12px] max-sm:leading-[18px] max-sm:mb-[10px]"
          >
            Quick Link
          </h2>
          <nav>
            <ul class="flex flex-col gap-y-[13px] max-sm:gap-y-[8px]">
              {#each menu as item}
                <li>
                  <a
                  href="#{item.link}"
                  on:click|preventDefault={scrollIntoView}
                    class="leading-[24px] text-black text-[16px] cursor-pointer font-medium flex items-center gap-x-[10px] duration-300 ease-in-out item-link-footer max-sm:text-[9px] max-sm:leading-[13.5px] max-sm:gap-x-0"
                  >
                    <img
                      src="src/lib/images/arrow-down.svg"
                      alt="arrow-down"
                      width="25"
                      height="25"
                      class="max-sm:hidden"
                    />
                    {item.title}
                  </a>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
        <div>
          <h2
            class="uppercase text-black text-[18px] leading-[27px] mb-[16px] font-bold max-sm:text-[12px] max-sm:leading-[18px] max-sm:mb-[10px]"
          >
            Support
          </h2>
          <nav>
            <ul class="flex flex-col gap-y-[13px] max-sm:gap-y-[8px]">
              <li>
                <a
                  href="/privacy-policy"
                  class="leading-[24px] text-black text-[16px] cursor-pointer font-medium flex items-center gap-x-[10px] duration-300 ease-in-out item-link-footer max-sm:text-[9px] max-sm:leading-[13.5px] max-sm:gap-x-0"
                >
                  <img
                    src="src/lib/images/arrow-down.svg"
                    alt="arrow-down"
                    width="25"
                    height="25"
                    class="max-sm:hidden"
                  />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  class="leading-[24px] text-black text-[16px] cursor-pointer font-medium flex items-center gap-x-[10px] duration-300 ease-in-out item-link-footer max-sm:text-[9px] max-sm:leading-[13.5px] max-sm:gap-x-0"
                >
                  <img
                    src="src/lib/images/arrow-down.svg"
                    alt="arrow-down"
                    width="25"
                    height="25"
                    class="max-sm:hidden"
                  />
                  Term & Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h2
            class="uppercase text-black text-[18px] leading-[27px] mb-[16px] font-bold max-sm:text-[12px] max-sm:leading-[18px] max-sm:mb-[10px]"
          >
            Contact us
          </h2>
          <div>
            <div
              class="flex items-start gap-x-[10px] mb-[13px] max-sm:gap-x-[4px] max-sm:mb-[4px]"
            >
              <img
                src="src/lib/images/mail.png"
                alt="Email Govo"
                title="Email Govo"
                width="24"
                height="25"
                class="max-sm:w-[11px] max-sm:h-[11px]"
              />
              <a
                href="mailto:contact@govo.tech"
                class="text-[#7d7d7d] text-[16px] leading-[24px] font-medium max-sm:text-[9px] max-sm:leading-[13.5px] ease-in duration-300 hover:text-colorActive"
              >
                {email}
              </a>
            </div>
            <div class="flex items-start gap-x-[10px] max-sm:gap-x-[4px]">
              <img
                src="src/lib/images/location.png"
                alt="Location Govo"
                title="Location Govo"
                width="24"
                height="25"
                class="max-sm:w-[11px] max-sm:h-[11px]"
              />
              <p
                class="uppercase text-[#7d7d7d] text-[16px] leading-[24px] font-medium max-sm:text-[9px] max-sm:leading-[13.5px]"
              >
                9 Raffles place #29-05 Republic plaza Singapores (48619)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .bt-action:hover {
    filter: invert(45%) sepia(99%) saturate(660%) hue-rotate(346deg)
      brightness(98%) contrast(93%);
    background-color: rgba(241, 117, 34, 0.08);
  }

  .item-link-footer:hover {
    color: rgba(241, 117, 34, 1);
  }

  .item-link-footer:hover img {
    filter: invert(45%) sepia(99%) saturate(660%) hue-rotate(346deg)
      brightness(98%) contrast(93%);
  }
</style>
