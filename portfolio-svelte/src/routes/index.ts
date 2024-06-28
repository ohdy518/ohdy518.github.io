import { browser } from '$app/environment';

if (browser) {
    window.scrollTo(0, 0)
}

function loadAboutPage(){
    let elementsToHide = document.querySelectorAll(".hide-me")!
    elementsToHide.forEach(element => {
        element.classList.add('invisible');
    })
    console.log(elementsToHide)

    window.scrollTo(0, 0);
    window.location.href = "/about"
}

function IOHandler(es: IntersectionObserverEntry[]) {
    es.forEach(e => {
        if (e.isIntersecting) {
            loadAboutPage()
        }
    })

}

if (browser) {
    let observer = new IntersectionObserver((e) => {IOHandler(e)})

    let detectionTarget = document.getElementById("detection-target");

    if (detectionTarget == null){

    }
    else {
        observer.observe(detectionTarget)
    }


}