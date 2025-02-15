// drop down 
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


// back to top button
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


// change the opacity and smooth scroll 
let header = document.getElementById('header');

function getEle(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // on click to change the opacity of header
        setTimeout(() => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            header.style.opacity = scrollTop < 10 ? '1' : '0.5';
        }, 300);
    }    
}

// on scroll to change the opacity of header
window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    header.style.opacity = scrollTop < 10 ? '1' : '0.5';
});

// time codes for footer
let timeNow = new Date();
let time = document.getElementById('time');

time.innerHTML = timeNow.getFullYear();
