// import {browser} from "$app/environment";
//
// export function initializeScrollObserver(){
//     if (browser) {
//         let observer = new IntersectionObserver((e) => {IOHandler(e)})
//
//         let detectionTarget = document.getElementById("detection-target");
//
//         if (detectionTarget == null){
//             console.error("detectionTarget is null")
//         }
//         else {
//             console.log(detectionTarget)
//             observer.observe(detectionTarget)
//         }
//
//     }
// }
//
// export function scrollAndLinkTo(link: string) {
//     if (browser) {
//         showHiddenByDefaults()
//         let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
//         window.scrollTo(
//             {
//                 top: document.body.scrollHeight,
//                 left: 0,
//                 behavior: 'smooth'
//             }
//         )
//         enabled = true
//     }
// }