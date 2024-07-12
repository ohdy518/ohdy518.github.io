import { browser } from "$app/environment";

// Grab the key from URL params.
// let key: string = ""

if (browser) {

    const urlParams = new URLSearchParams(window.location.search);
    const isReady = urlParams.has('to');

    if (isReady) {
        let key = urlParams.get("to")!.toString()
        getURLFromKey(key).then(r => {redirectTo(r)})
    } else {
        console.error("retrieved key is null")
    }
}

// Redirect the user to the URL.
function redirectTo(url: string) {
    if (browser) {
        window.location.href = url
    }
}

// Retrieve key from database.

import { supabase } from "$lib/supabaseClient";

async function getURLFromKey(request_key: string) {
    const { data } = await supabase
        .from("links")
        .select("*")
        .eq("key", request_key)
        .single();
    try {
        return data.url
    } catch {
        return "/links/notfound"
    }

    // return {
    //     links: data ?? [],
    // };
}

// An export function for use in dynamic routes.

export function getURLAndRedirect(key: string) {
    getURLFromKey(key).then(r => {redirectTo(r)})
}