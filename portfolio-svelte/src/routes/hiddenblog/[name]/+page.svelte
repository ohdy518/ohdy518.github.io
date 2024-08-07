<script lang="ts">
    import { page } from "$app/stores";
    import { blogs } from "../data"
    // import {writable} from "svelte/store";
    import {browser} from "$app/environment";
    // import { getURLAndRedirect } from "./../param-manager.ts"
    let title: string = ""
    let description: string = ""
    let content: string = ""

    const name: string = $page.params.name
    const thisBlog = blogs.find(blog => blog.caller === name.toLowerCase())
    if (thisBlog == undefined) {
        if (browser) {
            window.location.href = "/hiddenblog/notfound"
        }
    } else {
        title = thisBlog!.title!
        description = thisBlog!.description!
        content = thisBlog!.content!
    }


    if (browser) {
        let titleHTML = document.getElementById("blog-title")!
        let descriptionHTML = document.getElementById("blog-description")!
        let contentHTML = document.getElementById("blog-content")!

        titleHTML.innerHTML = title
        descriptionHTML.innerHTML = description
        contentHTML.innerHTML = content
    }

</script>

<div id="container" class="bg-neutral-950 w-[56.25vh] h-full min-h-screen px-[5.625vh]">
    <div id="navbar" class="w-max h-c-medium mb-c-medium">
    </div>
    <div id="content" class="mt-c-large">
        <div id="intro" class="mb-c-medium">
            <div class="w-full flex">
                <h1 class="inter text-5xl mb-c-medium text-nowrap w-fit font-semibold" id="blog-title">Loading...</h1>
            </div>
            <span class="inter text-lg leading-relaxed" id="blog-description">
                The blog you requested for is loading. The blog will render momentarily.
            </span>
        </div>
        <hr />
        <div id="content" class="my-c-medium">
            <span class="inter text-lg leading-relaxed" id="blog-content">

            </span>
        </div>
    </div>
</div>
