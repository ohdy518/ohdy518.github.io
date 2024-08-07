<script lang="ts">
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    // import { getURLAndRedirect } from "./../param-manager.ts"

    const key: string = $page.params.key
    if (browser) {
        window.location.href = "/links/" + key
    }
</script>

<span>
    You are being redirected to the requested webpage.
</span>
