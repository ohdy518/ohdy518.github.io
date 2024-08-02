import twemoji from "twemoji"

import {browser} from "$app/environment";

export function ParseTwemoji() {
    if (browser) {
        twemoji.parse(document.body)
    }
}
