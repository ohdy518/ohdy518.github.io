<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>

<script lang="ts">
    import "./../style.css"
    import "./animations.css"
    import {projectsText, experiencesText, emailmeText, onHoverEnter, onHoverExit} from "./change-text-on-hover.ts";

    import { initializeScrollObserver, scrollAndLinkTo } from "../scroll-to-redirect.ts";

    initializeScrollObserver()
</script>

<div id="container" class="flex flex-col min-h-screen max-w-[75%] min-w-[1440px] bg-neutral-800 items-start justify-between">
    <div id="full-screen" class="min-w-[1080px] h-full mt-[100px] ml-[140px] flex flex-col items-start self-start fadeInOnLoad hide-me">
        <h1 id="title" class="text-[72px] font-bold ml-c-medium w-fit inter-title">
            About me
        </h1>

        <span id="about-me-text" class="mt-c-small text-[36px] font-normal ml-c-medium w-fit">
            I am a student living in South Korea. <br />
            <br />
            I love anything related to computers, math or science. <br />
            <br />
            I try finding new and interesting facts every day. <br />
            <br />
            As a result, I make a lot of things, albeit most of them is useless. <br />
            Here are
            <button id="hover-target" class="text-left text-sky-400 force-inline-block w-[480px]"
               on:mouseover={() => {onHoverEnter("projects")}}
               on:mouseout={() => onHoverExit("projects")}
               on:focus={() => onHoverEnter("projects")}
               on:blur={() => onHoverExit("projects")}
               on:click={() => {scrollAndLinkTo("/projects")}}
            >
                {$projectsText}
            </button>
            <br />
            <br />
            I didn't live long, but I've learned lots of things <br /> over my years of exploration. <br />

            <span id="jbm-sveltekit" class="jbm-username hover:text-[#ff3e00]" >SvelteKit</span> and <span id="jbm-typescript" class="jbm-username hover:text-[#3078c6]">TypeScript</span> is one of them, and
            <button id="hover-target" class="text-left text-sky-400 force-inline-block w-[360px]"
               on:mouseover={() => {onHoverEnter("experiences")}}
               on:mouseout={() => onHoverExit("experiences")}
               on:focus={() => onHoverEnter("experiences")}
               on:blur={() => onHoverExit("experiences")}
               on:click={() => {scrollAndLinkTo("/experiences")}}>
            {$experiencesText}</button>
            <br />
            <br /> <br />
            Want to learn more about me <br />
            or recommend me a new thing to learn? <br />
            <button id="hover-target" class="text-left text-sky-400 force-inline-block w-[600px]"
               on:mouseover={() => {onHoverEnter("emailme")}}
               on:mouseout={() => onHoverExit("emailme")}
               on:focus={() => onHoverEnter("emailme")}
               on:blur={() => onHoverExit("emailme")}
               on:click={() => {scrollAndLinkTo("/emailme")}}>
            {$emailmeText}</button>
        </span>


    </div>

    <div id="about-loader" class="hide-me-by-default w-full h-0 justify-end flex flex-col items-end overflow-hidden">
        <div id="detection-target" class="pt-c-small overflow-hidden w-1"></div>
    </div>


</div>

