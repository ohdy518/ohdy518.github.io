<script lang="ts">
    import { page } from "\$app/stores";

    import { getURLAndRedirect } from "./../param-manager.ts"

    const key: string = $page.params.key
    getURLAndRedirect(key)
</script>

<span>
    You are being redirected to the requested webpage.
</span>