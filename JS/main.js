let drop = document.getElementById("drop");
let item = document.getElementById("drop-item");

item.style.visibility = "hidden";

drop.addEventListener("click", function () {
    if (item.style.visibility === "hidden") {
        item.style.visibility = "visible";
    } else {
        item.style.visibility = "hidden";
    }
});

drop.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (item.style.visibility === "hidden") {
            item.style.visibility = "visible";
        } else {
            item.style.visibility = "hidden";
        }
    }
});

let backToTop = document.getElementById("back-to-top");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener ('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

