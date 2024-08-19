// This file IS being used.

import { browser } from "$app/environment";

// Grab the key from URL params.
// let key: string = ""

if (browser) {

    const urlParams = new URLSearchParams(window.location.search);
    const isReady = urlParams.has('to');

    if (isReady) {
        // NOTE: this section is not used.

        let key = urlParams.get("to")!.toString()
        // let r = getURLFromKey(key)[0] // .then(r => {redirectTo(r)})
        // console.log(r)
        // redirectTo(r)
    } else {
        // console.error("retrieved key is null")
    }
}

// Redirect the user to the URL.
function redirectTo(url: string) {
    if (browser) {
        window.location.href = url
    }
}

// Retrieve key from database.

// NOTE: This project no longer uses Supabase.
import { supabase } from "$lib/supabaseClient";

async function oldGetURLFromKey(request_key: string) {
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

async function getURLFromKey(request_key: string) {
    // console.log(request_key)
    try {
        const link = await import(`./list/${request_key}.js`);
        return link.TO
    } catch (e) {
        if (browser) {
            window.location.href = "/links/notfound"
        }
        return null
    }
}

// An export function for use in dynamic routes.

export async function getURLAndRedirect(key: string) {
    let r = await getURLFromKey(key)// .then(r => {redirectTo(r)})
    redirectTo(r)
}