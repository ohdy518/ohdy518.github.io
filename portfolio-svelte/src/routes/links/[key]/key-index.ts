// This file is not used.

import {browser} from "$app/environment";

// let key: string = ""

if (browser) {
    const urlParams = new URLSearchParams(window.location.search);
    const isReady = urlParams.has('key');

    if (isReady) {
        // key = urlParams.get("to")!.toString()
    } else {
        console.error("retrieved key is null")
    }
}