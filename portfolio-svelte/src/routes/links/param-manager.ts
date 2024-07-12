import { browser } from "$app/environment";
import { writable } from "svelte/store";

// Grab the key from URL params.
let key: string = ""

if (browser) {

    const urlParams = new URLSearchParams(window.location.search);
    const isReady = urlParams.has('to');

    if (isReady) {
        key = urlParams.get("to")!.toString()
        getURLFromKey().then(r => {redirectTo(r)})
    } else {
        console.error("retrieved key is null")
    }
}

// Redirect the user to the URL.
function redirectTo(url: string) {
    window.location.href = url
}

// Retrieve key from database.

import { supabase } from "$lib/supabaseClient";

async function getURLFromKey() {
    const { data } = await supabase
        .from("links")
        .select("*")
        .eq("key", key)
        .single();

    return data.url

    // return {
    //     links: data ?? [],
    // };
}