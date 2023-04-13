function theme() {
    var element = document.body;
    var themeName = document.getElementById("themeName");
    var themeIcon = document.getElementById("themeIcon");
    var locationIcon = document.getElementById("locationIcon")
    var twitterIcon = document.getElementById("twitterIcon")
    var websiteIcon = document.getElementById("websiteIcon")
    var companyIcon = document.getElementById("companyIcon")
    element.classList.toggle("dark");
    if (element.classList == "dark") {
        themeName.innerText = "LIGHT";
        themeIcon.src = "./assets/icon-sun.svg"
        locationIcon.src = "./assets/icon-location-dark.svg"
        twitterIcon.src = "./assets/icon-twitter-dark.svg"
        websiteIcon.src = "./assets/icon-website-dark.svg"
        companyIcon.src = "./assets/icon-company-dark.svg"
    } else if (element.classList != "dark") {
        themeName.innerText = "DARK";
        themeIcon.src = "./assets/icon-moon.svg"
        locationIcon.src = "./assets/icon-location.svg"
        twitterIcon.src = "./assets/icon-twitter.svg"
        websiteIcon.src = "./assets/icon-website.svg"
        companyIcon.src = "./assets/icon-company.svg"
    }
}