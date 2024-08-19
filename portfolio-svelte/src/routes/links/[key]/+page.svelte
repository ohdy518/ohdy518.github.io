<script lang="ts">
    import { page } from "\$app/stores";

    import { getURLAndRedirect } from "./../param-manager.ts"
    import {onMount} from "svelte";

    const key: string = $page.params.key
    onMount(async () => {getURLAndRedirect(key)})
</script>

<span>
    You are being redirected to the requested webpage.
</span>