//console.clear()

setInterval(function(){
    if (window.location.href.includes("shorts")){
        //history.back()
        document.location = "https://www.youtube.com"

        // removes shorts from homepage
        //let to_hide = document.querySelectorAll("ytd-rich-section-renderer, .ytd-rich-section-renderer")
        //console.log(to_hide)
        //for (let i=0; i < to_hide.length; i++){
        //    to_hide[i]
        //    console.log("removed shorts")
        //}

    }
}, 1000)


