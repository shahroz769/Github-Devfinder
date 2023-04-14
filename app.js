function theme() {
    var element = document.body;
    var themeName = document.getElementById("themeName");
    var themeIcon = document.getElementById("themeIcon");
    var locationIcon = document.getElementById("locationIcon")
    var twitterIcon = document.getElementById("twitterIcon")
    var websiteIcon = document.getElementById("websiteIcon")
    var companyIcon = document.getElementById("companyIcon")
    var pandaError = document.getElementById("pandaErrorImg")
    element.classList.toggle("dark");
    if (element.classList == "dark") {
        themeName.innerText = "LIGHT";
        themeIcon.src = "./assets/icon-sun.svg"
        locationIcon.src = "./assets/icon-location-dark.svg"
        twitterIcon.src = "./assets/icon-twitter-dark.svg"
        websiteIcon.src = "./assets/icon-website-dark.svg"
        companyIcon.src = "./assets/icon-company-dark.svg"
        pandaError.src = "./assets/404-dark.svg"
    } else if (element.classList != "dark") {
        themeName.innerText = "DARK";
        themeIcon.src = "./assets/icon-moon.svg"
        locationIcon.src = "./assets/icon-location.svg"
        twitterIcon.src = "./assets/icon-twitter.svg"
        websiteIcon.src = "./assets/icon-website.svg"
        companyIcon.src = "./assets/icon-company.svg"
        pandaError.src = "./assets/404.svg"
    }
}
window.getDevDetails = function () {
    document.querySelector(".main-section-left").style.display = "block"
    document.querySelector(".main-section-right").style.display = "block"
    document.querySelector(".pandaError").style.display = "none"
    document.querySelector("#illustration").style.display = "none"
    let userName = document.querySelector("#username").value;
    let gitName = document.getElementById("git-name")
    let gitUsername = document.getElementById("git-username")
    let gitBio = document.getElementById("git-bio")
    let gitRepo = document.getElementById("git-repo")
    let gitFollowers = document.getElementById("git-followers")
    let gitFollowing = document.getElementById("git-following")
    let gitLocation = document.getElementById("git-location")
    let gitTwitter = document.getElementById("git-twitter")
    let gitUrl = document.getElementById("git-url")
    let gitCompany = document.getElementById("git-company")
    let gitProfileImage1 = document.getElementById("git-profile-image1")
    let gitProfileImage2 = document.getElementById("git-profile-image2")
    let gitDate = document.getElementById("git-date")
    axios.get(`https://api.github.com/users/${userName}`)
    .then(function (response) {
            console.log(response.data);
            // ----------------------------------MONTH---------------------MONTH--------------------MONTH----------------------------------------------------
            let date = response.data.created_at.replaceAll("-", " ").slice(0, 10)
            let monthNum = date.slice(5, 7)
            if (monthNum[0] == 0) {
                monthNum = monthNum.slice(1, 2)
            }
            let monthStr = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",]
            let month = monthStr[monthNum]
            let theDate = date.slice(8, 10) + " " + month + " " + date.slice(0, 4)
            // ----------------------------------MONTH---------------------MONTH--------------------MONTH----------------------------------------------------
            // ----------------------------------------URL---------------------URL--------------------URL----------------------------------------------------
            let url = response.data.html_url.slice(8)
            // ----------------------------------------URL---------------------URL--------------------URL----------------------------------------------------
            // ----------------------------CAPITALIZE---------------------CAPITALIZE--------------------CAPITALIZE----------------------------------------------
            let location = []
            if (response.data.location !== null && response.data.location !== undefined) {
                let tempLoc = response.data.location
                let locationArr = tempLoc.split(" ")
                for (i = 0; i < locationArr.length; i++) {
                    let capitalize = locationArr[i][0].toUpperCase() + locationArr[i].slice(1).toLowerCase()
                    location.push(capitalize)
                }
                location = location.join(" ")
            }
            // ----------------------------CAPITALIZE---------------------CAPITALIZE--------------------CAPITALIZE----------------------------------------------
            gitName.innerHTML = response.data.name
            gitUsername.innerHTML = "@" + response.data.login
            gitBio.innerHTML = response.data.bio
            gitRepo.innerHTML = response.data.public_repos
            gitFollowers.innerHTML = response.data.followers
            gitFollowing.innerHTML = response.data.following
            gitLocation.innerHTML = location
            gitTwitter.href = "https://twitter.com/" + response.data.twitter_username
            gitTwitter.innerHTML = "@" + response.data.twitter_username
            gitTwitter.target = "_blank"
            gitUrl.innerHTML = url
            gitUrl.href = response.data.html_url
            gitUrl.target = "_blank"
            gitCompany.innerHTML = response.data.company
            gitProfileImage1.src = response.data.avatar_url
            gitProfileImage2.src = response.data.avatar_url
            gitDate.innerHTML = "Joined " + theDate
            if (!gitBio.innerHTML) {
                gitBio.innerHTML = "No Bio"
            }
            if (!response.data.twitter_username) {
                gitTwitter.innerHTML = "Not Available"
                gitTwitter.href = "#"
            }
            if (!gitLocation.innerHTML) {
                gitLocation.innerHTML = "Not Available"
            }
            if (!gitCompany.innerHTML) {
                gitCompany.innerHTML = "Not Available"
            }
        })
        .catch(function (error) {
            console.log(error.data);
            document.querySelector(".main-section-left").style.display = "none"
            document.querySelector(".main-section-right").style.display = "none"
            document.querySelector(".pandaError").style.display = "block"
        })
}