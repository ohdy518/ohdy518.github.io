<script lang="ts">
    import { page } from "$app/stores";
    // import {writable} from "svelte/store";
    import {browser} from "$app/environment";
    import {onMount} from "svelte";
    // import { getURLAndRedirect } from "./../param-manager.ts"
    let title: string = ""
    let description: string = ""
    let content: string = ""

    const name: string = $page.params.name

    // const thisBlog = blogs.find(blog => blog.caller === name.toLowerCase())

    async function loadBlog(name: string): Promise<any> {
        try {
            const module = await import((`./../slugs/${name}.js`))
            return module.content;
        } catch (e) {
            if (browser) {
                window.location.href = "/blog/notfound"
            }
            return null
        }
    }
    onMount(async () => {
        let thisBlog = await loadBlog(name);
        // thisBlog = module.content
        // import { content } from

        if (thisBlog == undefined) {
        } else {
            title = thisBlog[0].title!
            description = thisBlog[0].description!
            content = thisBlog[0].content!
                .replaceAll("\\dn", "<br /><br />") //double new line
                .replaceAll("\\np", "<br /><br />&mdash;&mdash;&mdash;<br />") // new paragraph
                .replaceAll("\\cb ", "<span class='jbm text-base'>") // open code block
                .replaceAll("\\!cb", "</span>") // close code block
                .replaceAll("\\li ", "<a href='") // open link url
                .replaceAll("\\!liu ", "' class='hover:underline text-sky-400'>") // close link url
                .replaceAll("\\!li", "</a>") // close <a> tag. example of usage: `\li https://google.com\!liu here\!li`
                // to use a link inside a code block: \cb link \li https://google.com\!liu here\!li\!cb
                // good luck to future me.
        }

        if (browser) {
            let titleHTML = document.getElementById("blog-title")!
            let descriptionHTML = document.getElementById("blog-description")!
            let contentHTML = document.getElementById("blog-content")!

            titleHTML.innerHTML = title
            descriptionHTML.innerHTML = description
            contentHTML.innerHTML = content
        }
    })




</script>

<div id="container" class="bg-neutral-950 w-[56.25vh] h-full min-h-screen px-[5.625vh]">
    <div id="navbar" class="w-max h-c-medium mb-c-medium">
    </div>
    <div id="content" class="mt-c-large">
        <div id="intro" class="mb-c-medium">
            <div class="w-full flex">
                <h1 class="inter text-5xl mb-c-medium w-fit font-semibold" id="blog-title"> </h1>
            </div>
            <span class="inter text-lg leading-relaxed" id="blog-description">
                &nbsp;
            </span>
        </div>
        <hr />
        <div id="content" class="my-c-medium">
            <span class="inter text-lg leading-relaxed" id="blog-content">
                &nbsp;
            </span>
        </div>
    </div>
</div>
