<title>Next exam is in...</title>

<script lang="ts">
    const NEXT_EXAM = "October 23, 2024 07:50:00"

    let days = 0
    let hours = 0
    let minutes = 0
    let seconds = 0

    function calculateTimeLeft(targetDate: string) {
        const now: Date = new Date();  // Get current time
        const target: Date = new Date(targetDate);  // Target time

        const timeDifference = target - now;  // Difference in milliseconds

        if (timeDifference < 0) {
            console.log("The target date has already passed.");
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
            return;
        }

        days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    }
    calculateTimeLeft(NEXT_EXAM)
    setInterval(()=>{calculateTimeLeft(NEXT_EXAM)}, 1000)

</script>

<div class="flex flex-col justify-center min-h-screen items-center">
    <div class="mx-8">
        <span class="inter-tnum text-5xl" >{days}<span class="inter text-lg">&nbsp;day{days!==1?"s" : ""}</span>&nbsp;</span>

        <span class="inter-tnum text-5xl">{hours}<span class="inter text-lg">&nbsp;hour{hours!==1?"s" : ""}</span>&nbsp;</span>

        <span class="inter-tnum text-5xl">{minutes}<span class="inter text-lg">&nbsp;minute{minutes!==1?"s" : ""}</span>&nbsp;</span>

        <span class="inter-tnum text-5xl">{seconds}<span class="inter text-lg">&nbsp;second{seconds!==1?"s" : ""}</span>&nbsp;</span>
    </div>
    <div class="pt-4 mx-8">
    <span class="inter text-lg">remaining until <span class="inter-tnum text-lg" id="target-time-span">{NEXT_EXAM.replaceAll(" ", " ")}</span></span>
    </div>
</div>