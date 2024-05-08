<script>
    import { onMount } from 'svelte';
  
    export let totalCount;
  
    let count = 0;
    let runCountUp = false;
  
    onMount(() => {
      const el = document.getElementById('outstanding');
      if(el) {
        const targetPosition = el.getBoundingClientRect().top + window.scrollY;
  
      const scrollHandler = () => {
        if (!runCountUp && window.scrollY + window.innerHeight >= targetPosition) {
          runCountUp = true;
          const total = totalCount;
          const interval = 3000 / total;
          const increment = () => {
            count += 1;
            if (count < total) {
              setTimeout(increment, interval);
            }
          };
          setTimeout(increment, interval);
          window.removeEventListener('scroll', scrollHandler);
        }
      };
  
      window.addEventListener('scroll', scrollHandler);
      }
    });
  </script>

  <span>{count}</span>