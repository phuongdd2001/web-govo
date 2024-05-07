<script lang="ts">
  import type { PrivacyPolicy } from "$lib/core/data";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  //   const privacyPolicy = writable<PrivacyPolicy[]>([]);
  let termOfUse: any;

  onMount(async () => {
    const response = await fetch(
      "https://cms.govo.tech/api/terms?populate=deep",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    // privacyPolicy.set(data.data[0].attributes);
    termOfUse = data.data[0].attributes;
  });
</script>

<svelte:head>
  <title>Terms Conditions</title>
  <meta name="description" content="Terms Conditions" />
</svelte:head>

<img
  src="src/lib/images/banner_2.jpg"
  alt="Banner Terms Conditions"
  title="Banner Terms Conditions"
  class="w-full"
/>

<div class="page-default py-[40px] max-sm:py-[24px]">
  <div class="container mx-auto px-[15px]">
    <div class="des">
      {@html termOfUse && termOfUse.Des}
    </div>
  </div>
</div>
