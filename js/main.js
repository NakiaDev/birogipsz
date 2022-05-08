var headerLinks = document.getElementsByClassName("nav-link");

for (var i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
    })
}

function ShowGallery(galleryNumber) {
    document.getElementById("kepekCarouselZOV").classList.add("d-none")
    document.getElementById("kepekCarouselRM").classList.add("d-none")
    document.getElementById("kepekCarouselROZ").classList.add("d-none")
    document.getElementById("kepekCarouselOSZ").classList.add("d-none")
    document.getElementById("kepekCarouselLEC").classList.add("d-none")
    document.getElementById("kepekCarouselSAR").classList.add("d-none")
    document.getElementById("kepekCarouselKI").classList.add("d-none")

    switch (galleryNumber) {
        case 0:
            document.getElementById("kepekCarouselZOV").classList.remove("d-none")
            break
        case 1:
            document.getElementById("kepekCarouselRM").classList.remove("d-none")
            break
        case 2:
            document.getElementById("kepekCarouselROZ").classList.remove("d-none")
            break
        case 3:
            document.getElementById("kepekCarouselOSZ").classList.remove("d-none")
            break
        case 4:
            document.getElementById("kepekCarouselLEC").classList.remove("d-none")
            break
        case 5:
            document.getElementById("kepekCarouselSAR").classList.remove("d-none")
            break
        case 6:
            document.getElementById("kepekCarouselKI").classList.remove("d-none")
            break
    }
}

ShowGallery(0)