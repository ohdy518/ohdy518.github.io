<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>

<script lang="ts">
    import "./../style.css"
    import "./local-index.ts"
    import { initializeScrollObserver, scrollAndLinkTo } from "../scroll-to-redirect.ts";

    initializeScrollObserver()
</script>

<div id="container" class="flex flex-col min-h-screen max-w-[75%] min-w-[1440px] bg-neutral-800 items-start justify-between">
    <div id="full-screen" class="min-w-[1080px] h-full mt-[100px] ml-[140px] flex flex-col items-start self-start fadeInOnLoad hide-me">
        <h1 id="title" class="text-[72px] font-bold ml-c-medium w-fit inter-title">
            Email Me
        </h1>

        <span id="REPLACE-FROM-HERE" class="mt-c-small text-[36px] font-normal ml-c-medium w-fit">

        </span>


    </div>

    <div id="about-loader" class="hide-me-by-default w-full h-0 justify-end flex flex-col items-end overflow-hidden">
        <div id="detection-target" class="pt-c-small overflow-hidden w-1"></div>
    </div>


</div>

