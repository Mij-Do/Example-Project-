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
