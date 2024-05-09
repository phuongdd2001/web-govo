<script lang="ts">
  import { getPrivacyPolicies } from "$lib/core/api/store";
  import { onMount } from "svelte";


  let privacyPolicy: any;

  onMount(async () => {
    const res = await getPrivacyPolicies();
    privacyPolicy = res.data[0].attributes;
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
