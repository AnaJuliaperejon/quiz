const crs = ["facil1.html", "facil2.html", "facil3.html"]
var i = 0;

function play(){
    document.location.href("facil1.html")
}

function passar() {
    i--;
    document.location.href=crs[i]
}