import { writable } from "svelte/store"
import { browser } from "$app/environment"

let projHovering = false
let projectsTextTemplate = "some things I've made."
let projectsTextOnHover = "-> Projects"
export const projectsText = writable<string>(projectsTextTemplate);

let expHovering = false;
let experiencesTextTemplate = "there's quite more. "
let experiencesTextOnHover = "-> Experiences"
export let experiencesText = writable<string>(experiencesTextTemplate);

let emailHovering = false;
let emailmeTextTemplate = "I'd love to read an email from you. "
let emailmeTextOnHover = "-> Email Me"
export let emailmeText = writable<string>(emailmeTextTemplate);

let elements: NodeListOf<any>;

if (browser) {
    elements = document.querySelectorAll("#hover-target")!
}

export function onHoverEnter(elementName: string) {
    switch (elementName) {
        case "projects":
            projHovering = true
            break

        case "experiences":
            expHovering = true
            break

        case "emailme":
            emailHovering = true
            break
    }

    updateTexts(elementName)
}

export function onHoverExit(elementName: string) {
    switch (elementName) {
        case "projects":
            projHovering = false
            break

        case "experiences":
            expHovering = false
            break

        case "emailme":
            emailHovering = false
            break
    }

    updateTexts(elementName)
}

function updateTexts(elementName: string) {
    switch (elementName) {
        case "projects":
            fadeThisOut(0)
            if (projHovering) {
                projectsText.set(projectsTextOnHover)
            } else {
                projectsText.set(projectsTextTemplate)
            }
            fadeThisIn(1)
            break

        case "experiences":
            if (expHovering) {
                experiencesText.set(experiencesTextOnHover)
            } else {
                experiencesText.set(experiencesTextTemplate)
            }
            break

        case "emailme":
            if (emailHovering) {
                emailmeText.set(emailmeTextOnHover)
            } else {
                emailmeText.set(emailmeTextTemplate)
            }
            break
    }
}

function fadeThisIn(elementIndex: number) {
    elements[elementIndex].classList.remove("fade-it-out")
    elements[elementIndex].classList.add("fade-it-in")
    // console.log(elements[elementIndex])
}

function fadeThisOut(elementIndex: number) {
    elements[elementIndex].classList.remove("fade-it-in")
    elements[elementIndex].classList.add("fade-it-out")
    // console.log(elements[elementIndex])
}