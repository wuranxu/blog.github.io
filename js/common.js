window.onload = function() {
    const sidebar = document.querySelector(".sidebar")
    if (sidebar === null) {
        return;
    }
    if (window.location.pathname.indexOf("pity/") === -1) {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}


window.addEventListener('urlchangeevent', function(e) {
    // your code here
    const sidebar = document.querySelector(".sidebar")
    if (sidebar !== null) {
        const path = e.newURL.pathname;
        if (path.indexOf("pity/") === -1) {
            sidebar.style.display = "none";
        } else {
            sidebar.style.display = "block";
        }
    }

})