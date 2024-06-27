<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>

<script lang="ts">
    import "./../style.css"
</script>

<div id="container" class="flex flex-col min-h-[200vh] max-w-[75%] min-w-[1440px] bg-neutral-800 items-start justify-between">
    <div id="full-screen" class="min-w-[1080px] h-full mt-[140px] ml-[180px] flex flex-col items-start self-start fadeInOnLoad hide-me">
        <h1 id="title" class="text-[72px] font-bold ml-c-medium w-fit inter-title">
            About me
        </h1>
        <span id="name" class="mt-c-small text-[48px] font-normal ml-c-medium w-fit">
        I'm <span id="username" class="jbm-username">ohdy518</span>,
        </span>
        <span id="description" class="mt-c-small text-[48px] font-normal ml-c-medium w-fit">
            a student who loves computer.
        </span>

        <div id="separator" class="pt-c-large w-fit" />

        <a id="button-container" class="bg-slate-50 bg-opacity-15 w-fit h-[75px] ml-c-medium rounded-3xl flex items-center justify-center" href="https://github.com/ohdy518">
            <div id="button-icon" class="w-[36px] h-[36px] ml-[24px]">
                <svg class="w-[36px] h-[36px]" width="98" height="96" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#F8FAFC"/></svg>
            </div>
            <div id="button-text" class="text-[32px] font-normal ml-[18px] mr-[24px] w-fit" >
                My GitHub
            </div>
        </a>

        <a id="button-container" class="bg-slate-50 bg-opacity-15 w-fit h-[75px] ml-c-medium mt-c-small rounded-3xl flex items-center justify-center" href="mailto:ohdy518@gmail.com">
            <div id="button-icon" class="w-[36px] h-[36px] ml-[24px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F8FAFC" class="w-[36px] h-[36px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>

            </div>
            <div id="button-text" class="text-[32px] font-normal ml-[18px] mr-[24px] w-fit" >
                Email me
            </div>
        </a>

        <div id="separator" class="pt-c-large w-fit" />

        <span id="see-more" class="mt-c-small text-[48px] font-normal ml-c-medium w-fit">
            If you'd like to learn more, <br />please visit the <a href="/about" class="text-sky-400">-> About Me</a> page.
        </span>

    </div>


</div>

