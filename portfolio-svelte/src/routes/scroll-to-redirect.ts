import {browser} from "$app/environment";

let enabled: boolean = false

let globalLink: string = "/"

export function initializeScrollObserver(){
    if (browser) {
        let observer = new IntersectionObserver((e) => {IOHandler(e)})

        let detectionTarget = document.getElementById("detection-target");

        if (detectionTarget == null){
            console.error("detectionTarget is null")
        }
        else {
            observer.observe(detectionTarget)
        }

    }
}

function loadPage(link: string) {
    location.href = link;
}

function IOHandler(es: IntersectionObserverEntry[]) {
    es.forEach(e => {
        if (e.isIntersecting && enabled) {
            loadPage(globalLink)
        }
    })
}

function showHiddenByDefaults() {
    let hiddenByDefaultElements = document.querySelectorAll(".hide-me-by-default")!
    hiddenByDefaultElements.forEach((element, _) => {
        element.classList.remove("h-0")
        element.classList.add("h-screen")
    })
}

export function scrollAndLinkTo(link: string) {
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

        globalLink = link
    }
}