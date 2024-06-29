import { browser } from '$app/environment';

let enabled: boolean = false

if (browser) {
    window.scrollTo(0, 0)
}

export function linkToAboutPage() {
    if (browser) {
        showHiddenByDefaults()
        window.scrollTo(
            {
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
            }
        )
        enabled = true
    }
}

function showHiddenByDefaults() {
    let hiddenByDefaultElements = document.querySelectorAll(".hide-me-by-default")!
    hiddenByDefaultElements.forEach((element, _) => {
        element.classList.remove("h-0")
        element.classList.add("h-screen")
    })
}

function loadAboutPage(){
    window.location.href = "/about"
}

function IOHandler(es: IntersectionObserverEntry[]) {
    es.forEach(e => {
        if (e.isIntersecting && enabled) {
            loadAboutPage()
        }
    })

}

if (browser) {
    let observer = new IntersectionObserver((e) => {IOHandler(e)})

    let detectionTarget = document.getElementById("detection-target");

    if (detectionTarget == null) {
        console.error("detectionTarget is null")
    }
    else {
        observer.observe(detectionTarget)
    }

}