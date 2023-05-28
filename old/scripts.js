document.getElementById("contact-button").addEventListener("click",function() {
    var posicionDiv = document.getElementById("contactme").offsetTop;

    window.scrollTo({top: posicionDiv, behavior: "smooth"});
});