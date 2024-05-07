<script lang="ts">
  import type { PrivacyPolicy } from "$lib/core/data";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";


//   const privacyPolicy = writable<PrivacyPolicy[]>([]);
    let privacyPolicy: any;

  onMount(async () => {
    const response = await fetch(
      "https://cms.govo.tech/api/privacy-policies?populate=deep",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    // privacyPolicy.set(data.data[0].attributes);
    privacyPolicy = data.data[0].attributes;
  });
</script>

<svelte:head>
  <title>Privacy Policy</title>
  <meta name="description" content="Privacy Policy" />
</svelte:head>

<img
  src="src/lib/images/banner_3.jpg"
  alt="Banner Privacy Policy"
  title="Banner Privacy Policy"
  width="100%"
/>

<div class="page-default py-[40px] max-sm:py-[24px]">
  <div class="container mx-auto px-[15px]">
    <div class="des">
        {@html privacyPolicy && privacyPolicy.Content}
    </div>
  </div>
</div>
