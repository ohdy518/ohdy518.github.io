<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>

<script lang="ts">
    import {browser} from "$app/environment";

    const PersonalInfoText = "EMAIL INFO <br />" +
        "ADDR: ohdy518@gmail.com <br />" +
        "SUBJ: [PORTFOLIO] (your title here) <br />" +
        "CONT: (your content here) <br />"

    function revealPersonalInfo() {
        if (browser) {
            let infoElem = document.getElementById("info")!;
            infoElem.innerHTML = PersonalInfoText
        }
    }
</script>

<div id="container" class="bg-neutral-950 w-[56.25vh] h-full min-h-screen px-[5.625vh]">
    <div id="navbar" class="w-max h-c-medium mb-c-medium">
        <!--        TODO: Move to +layout.svelte-->
    </div>
    <div id="content" class="mt-c-large">
        <div id="intro" class="mb-c-medium">
            <div class="w-full flex">
                <h1 class="inter text-5xl mb-c-medium text-nowrap w-fit font-semibold" id="hello-text">Email me</h1>
            </div>
            <span class="inter text-lg leading-relaxed">
                Seems like you've decided to email me. <br />
                Good news, I know how to read emails.  <br />
                <br />
                If you're looking for a <span class="jbm">mailto</span> link for sending a quick email,
                <a class="hover:underline text-sky-400" href="mailto:ohdy518@gmail.com?subject=%5BPORTFOLIO%5D" target="_blank">click&nbsp;here. </a> <br />
                <br />
                Alternatively, if you wish to send one manually,
                <button class="hover:underline text-sky-400" on:click={revealPersonalInfo}>click&nbsp;here.&nbsp;<span class="text-xs jbm bg-neutral-700 px-1 py-0.5 rounded">Reveal&nbsp;info</span></button> <br />
                <br />
            </span>
            <span class="jbm text-lg" id="info">
                &nbsp;
            </span>
        </div>
    </div>
</div>