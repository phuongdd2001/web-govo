<script lang="ts">
  import { getTerms } from "$lib/core/api/store";
  import { onMount } from "svelte";


  let termOfUse: any;

  onMount(async () => {
    const res = await getTerms();
    termOfUse = res.data[0].attributes;
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
