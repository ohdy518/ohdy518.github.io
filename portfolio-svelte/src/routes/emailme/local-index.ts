import { writable } from "svelte/store";
const revealText: string = "Reveal information"
const hideText: string = "Hide information"
export const revealOrHide = writable<string>(revealText)

const red: string = "rose-500"
const blue: string = "sky-400"

export const currentColor = writable<string>(red)

export const hiddenCSS = writable<string>("hidden")

let revealing = false

function revealInfo() {
    revealOrHide.set(hideText)
    currentColor.set(blue)
    hiddenCSS.set("")
}

function hideInfo() {
    revealOrHide.set(revealText)
    currentColor.set(red)
    hiddenCSS.set("hidden")
}

export function revealOrHideHandler() {
    if (revealing) {
        revealing = false
        hideInfo()
    }
    else {
        revealing = true
        revealInfo()
    }
}