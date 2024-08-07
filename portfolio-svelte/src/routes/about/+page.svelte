<title>About ohdy518</title>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>

<script lang="ts">
    import {browser} from "$app/environment";

    const PersonalInfoText = "CONTACT ME <br /> <br />" +
        "Email....... ohdy518@gmail.com <br />" +
        "GitHub...... @ohdy518 <br />" +
        "Discord..... @ohdy518 <br />" +
        "Instagram... @ohdy.518"

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
                <h1 class="inter text-5xl mb-c-medium text-nowrap w-fit font-semibold" id="hello-text">About me</h1>
            </div>
            <span class="inter text-lg leading-relaxed">
                I'm <span class="jbm-username bg-neutral-700 px-1 py-0.5 rounded">ohdy518</span>, a student in South&nbsp;Korea. <br/>
                I am a computer enthusiast who loves anything and everything computer. <br />
                <br />
                I've been playing with computers since I was nine. <br />
                My expertise in Scratch soon evolved into important skills in programming. <br />
                <br />
                I use and try many programming languages, and
                <a class="hover:underline text-sky-400" href="/experiences">these&nbsp;are&nbsp;some&nbsp;I&nbsp;do. </a> <br />
                <br />
                Starting and developing projects is my cure for boredom. <br />
                Although many goes to the bin, some gets finished and <a class="hover:underline text-sky-400" href="/projects">is&nbsp;showcased.</a> <br />
                <br />
                If you'd like to learn more about me, you can
                <a href="/emailme" class="hover:underline text-sky-400">email&nbsp;me</a>
                or
                <button class="hover:underline text-sky-400" on:click={revealPersonalInfo}>contact&nbsp;me&nbsp;in&nbsp;other&nbsp;ways.&nbsp;<span class="text-xs jbm bg-neutral-700 px-1 py-0.5 rounded">Reveal&nbsp;info</span></button> <br />
                <br />
            </span>
            <span class="jbm text-lg" id="info">
                &nbsp;
            </span>
        </div>
    </div>
</div>