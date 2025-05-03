//console.clear()

function remove_shorts(){
    // removes shorts from homepage
    let to_hide = document.querySelectorAll("ytm-shorts-lockup-view-model-v2, ytm-shorts-lockup-view-model")
    console.log(to_hide)
    //debugger
    for (let i=0; i < to_hide.length; i++){
        to_hide[i].remove()
        console.log("removed shorts")
    }
}


// interval with a function containing the remove_shorts function and little additional redirect code.
setInterval(function(){
    remove_shorts()

    // takes you back to before you clicked the short
    if (window.location.href.includes("shorts")){
        history.back()
        document.location = document.location // refreshes page
        //document.location = "https://www.youtube.com"

    }
}, 10000)


