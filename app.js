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
window.getDevDetails = function () {

    let userName = document.querySelector("#username").value;

    axios.get(`https://api.github.com/users/${userName}`)
        .then(function (response) {
            console.log(response.data);
            document.getElementById("git-name").innerHTML = response.data.name
            document.getElementById("git-username").innerHTML = "@" + response.data.login
            document.getElementById("git-bio").innerHTML = response.data.bio
            document.getElementById("git-repo").innerHTML = response.data.public_repos
            document.getElementById("git-followers").innerHTML = response.data.followers
            document.getElementById("git-following").innerHTML = response.data.following
            document.getElementById("git-location").innerHTML = response.data.location
            document.getElementById("git-twitter").innerHTML = response.data.twitter_username
            document.getElementById("git-url").innerHTML = response.data.html_url
            document.getElementById("git-company").innerHTML = response.data.company
            document.getElementById("git-profile-image1").src = response.data.avatar_url
            document.getElementById("git-profile-image2").src = response.data.avatar_url
            document.getElementById("git-date").innerHTML = "Joined " + response.data.created_at
        })
        .catch(function (error) {
            console.log(error.data);
        })



}